<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { direction, distance } from '../actions.js';
  import Mountain from './Mountain.svelte';

  let interval;
  let mountainAmount = 1; // 0 - 10
  let mountainAmountFloor = 1; // 0 - 10
  let mountainSize = () => Math.random() * 150 + 100; // 0 - 10

  const activeMountains = writable([]);

  const createMountain = (direction) => {
    const mountain = {
      id: Date.now(),
      bornLeft: direction === -1,
      bornAtDistance: $distance,
      size: Math.random() * 1750 + 700
    };
    activeMountains.set([mountain, ...$activeMountains]);
  };

  $: if ($direction === 1 || $direction === -1) {
    const duration =
      Math.random() * (1000 / mountainAmount) + 1000 / mountainAmountFloor;
    clearInterval(interval);
    interval = setInterval(() => createMountain($direction), duration);
  }
  $: if ($direction === 0) clearInterval(interval);

  onMount(() => createMountain(-1));
</script>

{#each $activeMountains as mountain (mountain.id)}
  <Mountain {...mountain} {activeMountains}/>
{/each}
