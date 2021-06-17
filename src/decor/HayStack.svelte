<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { direction, distance, power } from '../mechanics';
  import Hay from './Hay.svelte';

  const haySize = 200;

  const activeHay = writable([]);
  let interval;

  const createHay = (direction) => {
    const hay = {
      id: Date.now(),
      bornAt: direction,
      bornAtDistance: $distance,
      size: Math.random() * haySize + haySize
    };
    activeHay.set([hay, ...$activeHay]);
  };
  $: if ($direction !== 0) {
    console.log("generate hay: interval changes, that's bad...");
    const duration = 50000/$power;
    clearInterval(interval);
    interval = setInterval(() => createHay($direction), duration);
  } else {
    clearInterval(interval);
  }

  onMount(() => createHay(-1));
</script>

{#each $activeHay as hay}
  <Hay {...hay} {activeHay} />
{/each}
