<script>
    import { spring } from "svelte/motion";
    import { Cycler } from "../cycler";

    export let hohoho;
    export let hakkakakka;

    const store = spring(0);
    const cycler = new Cycler({from: 0, to: 10, duration: 300, maxIterations: 3});
    $: $hohoho ? cycler.play(store) : cycler.stop(store);
</script>

<circle cx="100" cy="150" r={Math.max($store, 0)} />
{#if $hakkakakka}
<path />
{/if}
