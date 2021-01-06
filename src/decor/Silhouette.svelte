<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { direction, distance } from '../physics.js';
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
  // every x milliseconds a hay will appear on the opposite side to where you go
  $: if ($direction !== 0) {
    const duration = 100;
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
