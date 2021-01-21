<script>
    import { spring } from "svelte/motion";
    import { onMount } from "svelte";
    import { moveLeft, moveRight } from "../actions";

    const coords = spring(
        { x: 0, y: 0 },
        {
            stiffness: 0.2,
            damping: 0.2,
        }
    );

    let timeout;
    $: if ($moveLeft || $moveRight) {
        timeout = setTimeout(() => coords.set({ x: 10, y: 0 }), 300);
    } else {
        coords.set({ x: 0, y: 0 });
        timeout && clearTimeout(timeout);
    }
</script>

<svg
    width="269"
    height="298"
    style="transform: translate({$coords.x}px, {$coords.y}px) rotate({$coords.x}deg);">
    <defs>
        <g id="miter-cross">
            <path d="M1 0L0 64" transform="translate(101.225 18)" id="a" />
            <path d="M22 1H0" transform="translate(92.225 51)" id="b" />
        </g>
    </defs>
    <path
        id="miter"
        d="M103.725 1l24.5 85h-49l24.5-85z"
        fill="#FFF"
        stroke="#000"
        stroke-width="2" />

    <g fill="none" stroke-linecap="round">
        <use xlink:href="#a" stroke="#000" stroke-width="5" />
        <use xlink:href="#a" stroke="#FFF" />
    </g>
    <g fill="none" stroke-linecap="round">
        <use xlink:href="#b" stroke="#000" stroke-width="5" />
        <use xlink:href="#b" stroke="#FFF" />
    </g>
</svg>
