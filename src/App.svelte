<script>
  import Claus from "./claus/Claus.svelte";
  import Keyboard from "./Keyboard.svelte";
  let visible = true;

  function respawn() {
    visible = false;
    setTimeout(() => visible = true, 100);
  }
  
  function kill() {
    visible = false;
  }
</script>

<style>
  .App {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>

<div class="App">
  <Keyboard />
  {#if visible}
  <Claus />
  {/if}
  <button on:click={kill}>kill</button>
  <button on:click={respawn}>respawn</button>
</div>
