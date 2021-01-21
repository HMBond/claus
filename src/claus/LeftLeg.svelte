<script>
    import { tweened } from "svelte/motion";
    import { cubicIn } from "svelte/easing";
    import { direction } from "../physics";
    import { Cycler } from "../cycler";

    let x = tweened(0, {
        duration: 300 / 2,
        easing: cubicIn,
    });
    const cycler = new Cycler({ from: 0, to: 50, duration: 300 });
    $: $direction ? cycler.play(x) : cycler.stop(x);
</script>

<svg style="transform: translateX({$x}px);">
    <path
        d="M25 0L50 67L0 67L25 0Z"
        transform="matrix(-0.9743701 -0.2249511 0.2249511 -0.9743701 101.9438 295.8549)"
        fill="#FFFFFF"
        stroke="#000000"
        stroke-width="2" />
</svg>
