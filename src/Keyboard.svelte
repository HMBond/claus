<script>
  import { moveLeft, moveRight, fire, hit, hohoho } from './actions.js';

  const keyActions = {
    a: moveLeft,
    d: moveRight,
    ' ': fire,
    q: hit,
    l: hohoho
  };

  //$: console.log({left: $moveLeft,right: $moveRight});

  function handleKeydown(event) {
    keyActions[event.key] && keyActions[event.key].set(true);
  }
  function handleKeyup(event) {
    keyActions[event.key] && keyActions[event.key].set(false);
  }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />
