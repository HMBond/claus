<script>
  import { speed, power, distance } from './mechanics';
</script>

<div class="debug-window">
  <div>
    distance: {JSON.stringify($distance)}
  </div>
  <div>
    speed: {JSON.stringify($speed)}
  </div>
  <div>
    power: {JSON.stringify($power)}
  </div>
  <div>
    <button on:click={() => power.update((p) => (p + 100))}>power up</button>
  </div>
  <div>
    <button on:click={() => power.update((p) => (p - 100))}>power down</button>
  </div>
</div>

<style>
  .debug-window {
    position: fixed;
    top: 3rem;
    left: 3rem;
  }
</style>
