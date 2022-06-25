<script>
  export let src = "";
  export let alt = "";
</script>

<style>
  .img-w-caption__figure {
    margin: 0;
  }
  .img-w-caption__caption {
    font-size: 0.8rem;
    text-align: center;
  }
</style>

<p>
  <figure class="img-w-caption__figure">
    <img src={src} alt={alt}>
    <figcaption class="img-w-caption__caption">
      <slot></slot>
    </figcaption>
  </figure>
</p>
