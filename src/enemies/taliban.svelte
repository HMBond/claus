<script>
  import { writable } from "svelte/store";
  import { tweened } from "svelte/motion";
  import { sineInOut } from "svelte/easing";
  import { fade, draw, fly, scale } from "svelte/transition";
  import Ak47 from "../guns/Ak47.svelte";
  import Body from "../bodyparts/Body.svelte";
  import Face from "../bodyparts/Face.svelte";
  import LeftArm from "../bodyparts/LeftArm.svelte";
  import RightLeg from "../bodyparts/RightLeg.svelte";
  import LeftLeg from "../bodyparts/LeftLeg.svelte";
  import { distance } from "../physics";
  import Turban from "../bodyparts/Turban.svelte";

  const enemyDirection = writable(0);
  const hakkakakka = writable(true);

  const rotation = tweened(0, {
    easing: sineInOut,
  });

  const position = tweened(2000, {
    easing: sineInOut,
  });
  const mirror = tweened(1, {
    easing: sineInOut,
  });
  $: if ($enemyDirection === -1) mirror.set(1);
  $: if ($enemyDirection === 1) mirror.set(-1);
</script>

<div
  style="transform: scaleX({$mirror}) translate({$position - $distance}px,{0}px);"
  out:fly={{ x: 8, y: 5, duration: 1000 }}
  in:fly={{ y: 10, duration: 1000 }}
>
  <LeftLeg direction={enemyDirection} fill="darkgoldenrod" />
  <RightLeg direction={enemyDirection} fill="darkgoldenrod" />
  <LeftArm fill="darkgoldenrod" />
  <Body fill="darkgoldenrod" />
  <Face {hakkakakka} taliban />
  <Turban />
  <Ak47 />
</div>

<style>
  div {
    position: relative;
    top: 7vh;
  }
</style>
