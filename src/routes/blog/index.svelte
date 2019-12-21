<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    padding: 0;
  }

  h2 {
    font-size: 1.6em;
    /* text-transform: uppercase; */
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  li {
    /* margin: 0 0 0.5em 0; */
    /* list-style-type: decimal; */
    list-style-type: none;
    border: 0.5px solid #333;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    background: #fff;
    /* display: inline-block; */
    clear: both;
    float: left;
    box-shadow: 0 2.9px 2.5px -5px rgba(0, 0, 0, 0.1),
      0 5.9px 5.8px -5px rgba(0, 0, 0, 0.055),
      0 9.1px 10.4px -5px rgba(0, 0, 0, 0.035),
      0 12.7px 17.2px -5px rgba(0, 0, 0, 0.022),
      0 16.9px 28.3px -5px rgba(0, 0, 0, 0.013),
      0 22.1px 49.5px -5px rgba(0, 0, 0, 0.007),
      0 29px 107px -5px rgba(0, 0, 0, 0.002);
    /* display: inline; */
    /* width: inline; */
  }

  a {
    text-decoration: none;
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h2>Recent posts</h2>

<ul>
  {#each posts as post}
    <!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
    <li>
      <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
      by
      <a rel="prefetch" href="author/{post.author}">
        <code>{post.author}</code>
      </a>
    </li>
  {/each}
</ul>
