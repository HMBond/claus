<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { tweened } from "svelte/motion";
    import { sineInOut } from "svelte/easing";
    import { fade, draw, fly, scale } from 'svelte/transition';
    import Ak47 from "../guns/Ak47.svelte";
    import Miter from "./Miter.svelte";
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

<div style="transform: scaleX({$mirror});" out:fly="{{x:8, y: 5, duration: 1000}}" in:fly="{{y: 10, duration:1000}}">
    <LeftLeg
        initTransform="matrix(-0.9743701 -0.2249511 0.2249511 -0.9743701 101.9438 295.8549)" />
    <RightLeg
        initTransform="matrix(-0.9743701 -0.2249511 0.2249511 -0.9743701 156.4466 296)" />
    <LeftArm
        initTransform="matrix(0.358368 -0.9335804 0.9335804 0.358368 1.291992 173)" />
    <RightArm
        initTransform="matrix(0.309017 0.9510565 -0.9510565 0.309017 208.689 109.8369)" />
    <svg width="269" height="298">
        <path
            d="M117.226 107s26.804-10.17 43.204 45.43c16.401 55.6 20.801 103.2 20.001 106-.8 2.8-125.706 1.57-125.706 1.57s-1.5-17.5-1.5-45.5 6-52 24-80 40.001-27.5 40.001-27.5z"
            fill="#FFF"
            stroke="#000"
            stroke-width="2" />
        <path
            out:fly="{{x:-8, y: -5}}"
            d="M83.225 135l-11 16 7-3-9 21.26 9-4.26-7 31 7-8 5 24 15-29-3.932 19.505 16.177-32s5.755 9.495 5.755 8.495-4.332-26.628-4.332-26.628l7.644 6.4L111.225 140M73.225 106.5c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5z"
            fill="#FFF"
            stroke="#000"
            stroke-width="2" />
        <path
            out:fly="{{x:-10, y: -5}}"
            id="claus-inner-left-eyeball"
            d="M74.706 100.87c4.349 0 8.792 3.356 7.588 8.168-.717 2.87-6.067 4.901-5.48 4.901"
            fill="none"
            stroke="#000"
            stroke-width="2" />
        <path
            out:fly="{{x:-10}}"
            id="claus-nose"
            d="M95.284 112.675s-28.3 20.553-28.195 25.033c.105 4.48 33.781.052 33.781.052"
            fill="#FFF"
            stroke="#000"
            stroke-width="2" />
        <path
            out:fly="{{x:5, y:-10}}"
            id="claus-outer-right-eyeball"
            d="M87.225 106.5c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5z"
            fill="#FFF"
            stroke="#000"
            stroke-width="2" />
        <path
            out:fly="{{x:7, y:-10}}"
            id="claus-inner-right-eyeball"
            d="M101.45 106.298c-.521 0-1.296 2.946.58 2.477 1.793-.448 1.279-2.74-.37-2.74"
            fill="none"
            stroke="#000"
            stroke-width="4"
            stroke-linecap="round" />
        <defs>
            <path
                in:draw="{{duration: 1000}}"
                id="staff"
                d="M.125 287.812s-.281-247.816 0-259.5C.406 16.63 11.502.363 23.649.013c12.148-.35 24.642 7.301 24.976 21.301.333 14-10.181 22.57-19.5 23-9.319.43-16.933-6.6-17-15-.067-8.4 12.36-18.593 19-10.5 6.64 8.093-7.408 9.96-9 2"
                transform="translate(218.1 5.187)" />
        </defs>
        <g fill="none" stroke-linecap="round">
            <use xlink:href="#staff" stroke="#000" stroke-width="4" />
            <use xlink:href="#staff" stroke="#FFF" />
        </g>
    </svg>
    <Miter />
    <Ak47 />
</div>
