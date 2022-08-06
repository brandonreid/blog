<script>
  import { onMount } from 'svelte';
  import {getDate, formatDateString} from '$lib/utilities/formatDate.js';

  export let posts = []

  function numberOfDaysAfter(datePrev, dateNext) {
    const differenceInTime = getDate(dateNext) - getDate(datePrev);
    return differenceInTime / (1000 * 3600 * 24);
  }
</script>

<div class="post-list-wrapper">
  <ul class="posts-list">
    {#each posts as post, i}
      <li style="--pl-time-gap: {i < posts.length - 1 ? `${numberOfDaysAfter(posts[i + 1].date, post.date) / 2}em` : '0px'}">
        <article>
          <a class="post-link" href="/blog/{post.slug}">
            <div class="post-link_img-wrap">
              <img
                src={post.coverImage}
                alt=""
                width={post.coverWidth}
                height={post.coverHeight}
                style="ratio: {post.coverWidth} / {post.coverHeight}"
              />
            </div>
            <div class="post-link_content-wrap">
              <h2>
                {post.title}
              </h2>
              <span>{formatDateString(post.date)}</span>
              <p>{post.excerpt}</p>
            </div>
          </a>
        </article>
      </li>
    {/each}
  </ul>
</div>
