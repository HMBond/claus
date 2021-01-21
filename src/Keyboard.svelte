<script>
  import { moveLeft, moveRight, fire, hit, hohoho, walk } from './actions';

  const keyActions = {
    a: moveLeft,
    A: moveLeft,
    d: moveRight,
    D: moveRight,
    ' ': fire,
    q: hit,
    Q: hit,
    l: hohoho,
    L: hohoho
  };

  //$: console.log({ walk: $walk });

  let timeout;

  function handleKeydown(event) {
    keyActions[event.key] && keyActions[event.key].set(true);
    if (event.shiftKey) {
        walk.set(true);
        clearTimeout(timeout);
      timeout = setTimeout(() => {
          walk.set(false);
        }, 500);
      }
    }
    function handleKeyup(event) {
      keyActions[event.key] && keyActions[event.key].set(false);
  }
</script>

<svelte:window on:keydown={handleKeydown} on:keyup={handleKeyup} />
