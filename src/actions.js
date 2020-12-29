import { writable } from "svelte/store";
export const fire = writable(false);
export const hit = writable(false);
export const hohoho = writable(false);
export const moveLeft = writable(false);
export const moveRight = writable(false);
export const pause = writable(false);
export const distance = writable(0);

// function step(timestamp) {
//     distance.update(value => {
//         console.log(value);
//         return value + 1;
//     });
//     if (movingLeft) window.requestAnimationFrame(step);
// }

// let moveLeftInterval;

// moveLeft.subscribe((value) => {
//     if (value) {
//         movingLeft = true;
//         moveLeftInterval = window.requestAnimationFrame(step);
//     } else {
//         movingLeft = false;
//     }
// });
