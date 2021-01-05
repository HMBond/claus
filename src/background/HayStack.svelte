<script>
  import { writable } from 'svelte/store';
  import { direction, distance } from '../actions.js';
  import Hay from './Hay.svelte';

  let interval;
  let hayAmount = 7; // 0 - 10
  let hayAmountFloor = 7; // 0 - 10

  const activeHay = writable([]);

  const createHay = (direction) => {
    const newHay = {
      id: Date.now(),
      bornLeft: direction === -1,
      bornAtDistance: $distance,
      size: Math.random() * 150 + 100,
    };
    activeHay.set([newHay, ...$activeHay]);
  };
  // every x milliseconds a hay will appear on the opposite side to where you go
  $: if ($direction === 1 || $direction === -1) {
    const duration = Math.random() * (1000 / hayAmount) + 1000 / hayAmountFloor;
    clearInterval(interval);
    interval = setInterval(() => createHay($direction), duration);
  }
  $: if ($direction === 0) clearInterval(interval);
</script>

  {#each $activeHay as hay (hay.id)}
    <Hay {...hay} {activeHay} />
  {/each}
