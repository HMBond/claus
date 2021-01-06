<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { direction, distance, speed } from '../physics.js';
  import Mountain from './Mountain.svelte';

  const mountainAmount = 1; // 1 - 10
  const mountainMin = 1; // 1 - 10
  const mountainSize = () => Math.random() * 1250 + 750;

  const activeMountains = writable([]);
  let interval;

  const createMountain = (direction) => {
    const freshDistance = $distance;
    const mountain = {
      id: Date.now(),
      bornAt: direction,
      bornAtDistance: freshDistance,
      size: mountainSize()
    };
    activeMountains.set([mountain, ...$activeMountains]);
  };

  $: if ($direction !== 0) {
    const duration = 1000;
      //Math.sin($distance) * (1000 / mountainAmount) + 1000 / mountainMin;
    clearInterval(interval);
    interval = setInterval(() => createMountain($direction), duration);
  } else {
    clearInterval(interval);
  }

  onMount(() => createMountain(-1));
</script>

  {#each $activeMountains as mountain}
    <Mountain {...mountain} {activeMountains} />
  {/each}
