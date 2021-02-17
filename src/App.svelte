<script>
  import Claus from './claus/Claus.svelte';
  import Taliban from './enemies/Taliban.svelte';
  import Keyboard from './Keyboard.svelte';
  import Decor from './decor/Decor.svelte';
  import DebugWindow from './DebugWindow.svelte';
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
</style>

<div class="App">
  <Keyboard />
  <Decor>
    {#if alive}
      <Claus />
    {/if}
    <Taliban />
  </Decor>
  <!-- <GunFire /> -->
  <DebugWindow />
</div>
