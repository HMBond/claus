<script>
    import { tweened } from "svelte/motion";
    import { sineInOut } from "svelte/easing";
    import { fade, draw, fly, scale } from "svelte/transition";
    import Ak47 from "../guns/Ak47.svelte";
    import Body from "./Body.svelte";
    import Face from "./Face.svelte";
    import Miter from "./Miter.svelte";
    import Staff from "./Staff.svelte";
    import RightArm from "./RightArm.svelte";
    import LeftArm from "./LeftArm.svelte";
    import RightLeg from "./RightLeg.svelte";
    import LeftLeg from "./LeftLeg.svelte";
    import { direction } from "../physics.js";

    const mirror = tweened(-1, {
        easing: sineInOut,
    });
    $: if ($direction === -1) mirror.set(1);
    $: if ($direction === 1) mirror.set(-1);
</script>
<div
    style="transform: scaleX({$mirror});"
    out:fly={{ x: 8, y: 5, duration: 1000 }}
    in:fly={{ y: 10, duration: 1000 }}>
    <LeftLeg />
    <RightLeg />
    <LeftArm />
    <Body />
    <Face />
    <Staff />
    <Miter />
    <Ak47 />
    <RightArm />
</div>

<style>
  div {
    position:relative;
    top: 7vh;
  }
</style>