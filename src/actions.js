import { writable, get } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';

export const fire = writable(false);
export const hit = writable(false);
export const hohoho = writable(false);
export const moveLeft = writable(false);
export const moveRight = writable(false);
export const pause = writable(false);
export const direction = writable(0);
export const distance = tweened(1000, {
  duration: 100,
  easing: linear
});

let moveInterval;
const move = (input) => {
  if (get(direction) === input) return;
  direction.set(input);
  clearInterval(moveInterval);
  if (input === 0) {
    return;
  }
  moveInterval = setInterval(() => {
    distance.update((d) => {
      return input === 1 ? d + 50 : d - 50;
    });
  }, 100);
};

const goMoveLeft = (active) => {
  if (!active && get(moveRight)) {
    move(1);
    return;
  }
  active ? move(-1) : move(0);
};

const goMoveRight = (active) => {
  if (!active && get(moveLeft)) {
    move(-1);
    return;
  }
  active ? move(1) : move(0);
};

moveLeft.subscribe((active) => goMoveLeft(active));

moveRight.subscribe((active) => goMoveRight(active));
