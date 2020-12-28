<script>
    import { tweened } from "svelte/motion";
    import { sineInOut } from "svelte/easing";
    import { moveLeft, moveRight } from "../actions.js";
    import { Walker } from "../movement.js";

    export let initTransform;

    const walkingSpeed = 6;

    const x = tweened(0, {
        duration: 1000 / walkingSpeed,
        easing: sineInOut,
    });

    const walker = new Walker();
    $: $moveLeft || $moveRight ? walker.walk(x, 0, -50, walkingSpeed) : walker.stopWalking(x, 0);
</script>

<svg width="269" height="298" style="transform: translateX({$x}px);">
    <path
        d="M25 0L50 67L0 67L25 0Z"
        transform={initTransform}
        fill="#FFFFFF"
        stroke="#000000"
        stroke-width="2" />
</svg>
