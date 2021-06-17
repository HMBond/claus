import { writable, get } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { linear } from 'svelte/easing';
import { moveLeft, moveRight, walk } from './actions';

export const speed = tweened(0);
export const powerTween = tweened(100);
export const power = writable(100);
export const direction = writable(0);
export const distance = tweened(0, {
  duration: 200,
  easing: linear
});

power.subscribe((p) => powerTween.set(p));

let moveInterval;
const move = (input) => {
  if (get(direction) === input) return;
  direction.set(input);
  clearInterval(moveInterval);
  if (input === 0) {
    speed.set(0);
    return;
  }
  moveInterval = setInterval(() => {
    speed.set(get(powerTween) / 2);
    distance.update((d) => {
      return input === 1 ? d + get(speed) : d - get(speed);
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

walk.subscribe((w) => {
  if (w === true) {
    power.update((p) => p / 2);
  } else {
    power.update((p) => p * 2);
  }
});
