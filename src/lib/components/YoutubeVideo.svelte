<script>
  // NOTE: Grab the link from the youtube embed. Must have `/embed/` in the URL
  export let src = "";
</script>

<style>
  .youtube-embed {
    overflow: hidden;
    position: relative;
    width:100%;
  }

  .youtube-embed::after {
    padding-top: 56.25%;
    display: block;
    content: '';
  }

  .youtube-embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<div class="youtube-embed">
  <iframe
    src={src}
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
