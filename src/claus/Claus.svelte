<script>
  import { tweened } from "svelte/motion";
  import { sineInOut, cubicIn } from "svelte/easing";
  import { fade, draw, fly, scale } from "svelte/transition";
  import Miter from "./Miter.svelte";
  import Staff from "./Staff.svelte";
  import Ak47 from "../guns/Ak47.svelte";
  import Body from "../bodyparts/Body.svelte";
  import Face from "../bodyparts/Face.svelte";
  import RightArm from "../bodyparts/RightArm.svelte";
  import LeftArm from "../bodyparts/LeftArm.svelte";
  import RightLeg from "../bodyparts/RightLeg.svelte";
  import LeftLeg from "../bodyparts/LeftLeg.svelte";
  import { direction, speed } from "../physics";
  import { fire } from "../actions.js";

  const mirror = tweened(-1, {
    easing: sineInOut,
  });
  $: if ($direction === -1) mirror.set(1);
  $: if ($direction === 1) mirror.set(-1);
  $: shrinkOnSpeed = $speed / 1000;
</script>

<div
  style="transform: scaleX({$mirror - $mirror * shrinkOnSpeed}) scaleY({1 - shrinkOnSpeed});"
  out:fly={{ x: 8, y: 5, duration: 1000 }}
  in:fly={{ y: 10, duration: 1000 }}
>
  <LeftLeg {direction} fill="white" />
  <RightLeg {direction} fill="white" />
  <LeftArm fill="white" />
  <Body fill="white" />
  <Face fill="white" />
  <Staff />
  <Miter fill="white" />
  <Ak47 {fire} />
  <RightArm fill="white" />
</div>

<style>
  div {
    position: relative;
    top: 7vh;
  }
</style>
