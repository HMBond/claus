<script>
    import { tweened } from "svelte/motion";
    import { draw } from "svelte/transition";
    import { cubicInOut } from "svelte/easing";
    import { hit } from "../actions.js";

    const rotation = tweened(0, {
        duration: 100,
        easing: cubicInOut,
    });

    $: $hit ? rotation.set(-85) : rotation.set(0);
</script>

<svg>
    <defs>
        <path
            in:draw={{ duration: 1000 }}
            id="staff"
            d="M.125 287.812s-.281-247.816 0-259.5C.406 16.63 11.502.363 23.649.013c12.148-.35 24.642 7.301 24.976 21.301.333 14-10.181 22.57-19.5 23-9.319.43-16.933-6.6-17-15-.067-8.4 12.36-18.593 19-10.5 6.64 8.093-7.408 9.96-9 2"
            transform="translate(218.1 5.187) rotate({$rotation})"
            transform-origin="-100 240" />
    </defs>
    <g fill="none" stroke-linecap="round">
        <use xlink:href="#staff" stroke="#000" stroke-width="4" />
        <use xlink:href="#staff" stroke="#FFF" />
    </g>
</svg>
