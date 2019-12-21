<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    margin-left: calc(25% + 1em);
    box-sizing: border-box;
    background: #fff;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
