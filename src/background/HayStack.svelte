<script>
  import { writable } from 'svelte/store';
  import { direction, distance } from '../actions.js';
  import Hay from './Hay.svelte';

  const activeHay = writable([]);
  let id = 0;

  const createHay = (direction) => {
    id = id + 1;
    const newHay = {
      id: id,
      bornLeft: direction === -1,
      bornAtDistance: $distance,
      size: Math.random(),
    };
    activeHay.set([newHay, ...$activeHay]);
  };

  let interval;
  let hayLevel = 10; // 0 - 10
  let hayLevelMin = 10; // 0 - 10
  // every x milliseconds a hay will appear on the opposite side to where you go
  $: if ($direction === 1 || $direction === -1) {
    const duration = 500; //Math.random() * (4000 / hayLevel) + 400 + hayLevelMin;
    clearInterval(interval);
    interval = setInterval(() => createHay($direction), duration);
  }
  $: if ($direction === 0) clearInterval(interval);

  // .subscribe((value) => {
  //   if (value) {
  //     console.log("direction" + value);
  //     const duration = 300; //Math.random() * (4000 / hayLevel) + 400 * hayLevelMin;
  //     moveLeftInterval = setInterval(() => createHay(value), duration);
  //   } else {
  //     console.log("direction" + value);
  //     clearInterval(moveLeftInterval);
  //   }
  // });
</script>

<div>
  {#each $activeHay as hay (hay.id)}
    <Hay {...hay} {activeHay} />
  {/each}
</div>
