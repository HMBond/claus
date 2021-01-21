<script>
    import { tweened } from "svelte/motion";
    import { cubicInOut } from "svelte/easing";
    import { hit } from "../actions";

    const scaleX = tweened(0, {
        duration: 100,
        easing: cubicInOut,
    });

    $: $hit ? scaleX.set(-1) : scaleX.set(1);
</script>

<svg style="transform: scaleX({$scaleX})" transform-origin="145 0" >
    <path
        d="M25 0L50 67L0 67L25 0Z"
        transform="matrix(0.309017 0.9510565 -0.9510565 0.309017 208.689 109.8369)"
        fill="#FFFFFF"
        stroke="#000000"
        stroke-width="2" />
</svg>
