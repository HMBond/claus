<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
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
    import { moveLeft, moveRight } from "../actions.js";

    const mirror = tweened(-1, {
        duration: 200,
        easing: sineInOut,
    });

    $: if ($moveLeft) mirror.set(1);
    $: if ($moveRight) mirror.set(-1);
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
