import { postsPerPage } from '$lib/config'
import {getDate} from '$lib/utilities/formatDate.js';

const fetchPosts = async ({ offset = 0, limit = postsPerPage, category = '' } = {}) => {
  const posts = await Promise.all(
    Object.entries(import.meta.glob('../../posts/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      return { ...metadata, slug }
    })
  )

  let sortedPosts = posts.sort((a, b) => getDate(b.date) - getDate(a.date))

  if (category) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(category))
  }

  if (offset) {
    sortedPosts = sortedPosts.slice(offset)
  }

  if (limit && limit < sortedPosts.length && limit != -1) {
    sortedPosts = sortedPosts.slice(0, limit)
  }

  sortedPosts = sortedPosts.map(post => ({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    coverWidth: post.coverWidth,
    coverHeight: post.coverHeight,
    date: post.date,
    categories: post.categories,
  }))

  return {
    posts: sortedPosts
  }
}

export default fetchPosts
