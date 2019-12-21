<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`author.json`)
      .then(r => r.json())
      .then(posts => {
        return { authors: [...new Set(posts.map(post => post.author))] };
      });
  }
</script>

<script>
  export let authors;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    padding: 0;
    padding-left: 1em;
    /* padding: 0; */
  }

  li {
    /* margin: 0 0 0.5em 0; */
    /* list-style-type: decimal; */
    /* list-style-type: none; */
    /* border-bottom: 0.5px solid #333; */
    /* padding: 10px 0; */
    /* display: inline-block; */
    /* clear: both; */
    /* float: left; */
    /* display: inline; */
    /* width: inline; */
  }
  li::before {
    /* content: "-"; */
    /* padding-right: 5px; */
  }
</style>

<svelte:head>
  <title>Authors</title>
</svelte:head>

<h2>Authors</h2>

<ul>
  {#each authors as author}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="author/{author}">{author}</a>
    </li>
  {/each}
</ul>
