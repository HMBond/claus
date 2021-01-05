<script>
  import Claus from "./claus/Claus.svelte";
  import Keyboard from "./Keyboard.svelte";
  import Background from "./background/Background.svelte";
  let alive = true;

  function respawn() {
    alive = false;
    setTimeout(() => (alive = true), 100);
  }

  function kill() {
    alive = false;
  }
</script>

<style>
  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  button {
    z-index: 1;
  }
</style>

<div class="App">
  <Keyboard />
  <Background />
  {#if alive}
    <Claus />
  {/if}
  <!-- <GunFire /> -->

  <button on:click={kill}>kill</button>
  <button on:click={respawn}>respawn</button>
</div>
