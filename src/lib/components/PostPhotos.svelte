<script>
  export let photos = [];
</script>

<style>
  .post-photos {
    border: 4px solid var(--dark);
    margin: 5em 0;
    padding: 1em;
  }
  .post-photos h2 {
    font-size: 1.2rem;
    margin-top: 0;
  }
  .post-photos ul {
    list-style: none;
    margin: 0;
    padding: 0;
    column-count: 1;
    column-gap: 0.5em;
  }
  .post-photos li {
    margin: 0;
    display: grid;
    grid-template-rows: 1fr auto;
    margin-bottom: 0.5em;
    break-inside: avoid;
  }
  .post-photos img {
    display: block;
  }

  @media screen and (min-width: 642px) {
    .post-photos ul {
      column-count: 2;
    }
  }
  @media screen and (min-width: 1000px) {
    .post-photos ul {
      column-count: 3;
    }
  }
  @media screen and (min-width: 1540px) {
    .post-photos ul {
      column-count: 4;
    }
  }
</style>

<div class="post-photos">
  <h2>And now, some photos from our recent travels.</h2> 
  <ul>
    {#each photos as photo}
      <li>
        <img src={photo.image} alt={photo.alt} />
      </li>
    {/each}
  </ul>
</div>
