<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { direction, distance, power } from '../physics.js';
  import Mountain from './Mountain.svelte';

  const mountainSize = () => Math.random() * 1250 + 750;

  const activeMountains = writable([]);
  let interval;
  let mirror = false;

  const createMountain = (direction, mirror) => {
    const freshDistance = $distance;
    const mountain = {
      id: Date.now(),
      bornAt: direction,
      bornAtDistance: freshDistance,
      size: mountainSize(),
      mirror: mirror
    };
    activeMountains.set([mountain, ...$activeMountains]);
  };

  $: if ($direction !== 0) {
    const duration = 300000 / $power;
    clearInterval(interval);
    interval = setInterval(() => {
      mirror = !mirror;
      createMountain($direction, mirror);
    }, duration);
  } else {
    clearInterval(interval);
  }

  onMount(() => createMountain(-1, true));
</script>

{#each $activeMountains as mountain}
  <Mountain {...mountain} {activeMountains} />
{/each}
