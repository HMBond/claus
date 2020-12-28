<script>
    import { moveLeft, moveRight, fire } from "./actions.js";

    const keyActions = {
        a: moveLeft,
        d: moveRight,
        " ": fire,
    };

    function handleKeydown(event) {
        // console.log(event.key);
        keyActions[event.key] && keyActions[event.key].set(true);
        // if (event.key === "a") {
        //     moveLeft.set(true);
        // }
    }
    function handleKeyup(event) {
        keyActions[event.key] && keyActions[event.key].set(false);
        // if (event.key === "a") {
        //     moveLeft.set(false);
        // }
    }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />
