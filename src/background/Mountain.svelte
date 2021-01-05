<script>
  import { distance } from '../actions.js';
  export let id = -1;
  export let bornLeft = false;
  export let size = 200;
  export let bornAtDistance = 0;
  export let activeMountains;

  const elementsAppearOffset = 500;
  const parallaxSlowDown = 0.5;
  const initialMountainOffset = 60;

  let element;

  $: if (
    (element &&
      element.getBoundingClientRect().x - 2 * elementsAppearOffset >
        window.innerWidth) ||
    (element &&
      element.getBoundingClientRect().x + 2 * elementsAppearOffset < 0)
  ) {
    activeMountains.set([...$activeMountains.filter((mountain) => mountain.id !== id)]);
  }
</script>

<svg
  transform="scale(1, 0.7) translate(0,{initialMountainOffset})"
  version="1.0"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 379.6 81"
  width={size}
  style="bottom: 41vh;
  {bornLeft ? 'left: ' : 'right: '}{-elementsAppearOffset}px;
  transform: translateX({bornAtDistance - $distance * parallaxSlowDown}px);
  ">
  <linearGradient
    id="SVGID_1_"
    gradientUnits="userSpaceOnUse"
    x1="79.6536"
    y1="-48.8021"
    x2="293.3778"
    y2="193.4059">
    <stop offset="0.1224" style="stop-color:#2BB67350" />
    <stop offset="0.3316" style="stop-color:#A9B69270" />
    <stop offset="0.5153" style="stop-color:#00683880" />
    {#if size < 1300}
    <stop offset="0.6" style="stop-color:#82AC6E" />
    <stop offset="0.6327" style="stop-color:#82AC6E" />
    {/if}
    <stop offset="0.7194" style="stop-color:#699961" />
    <stop offset="0.9082" style="stop-color:#168950" />
  </linearGradient>
  <polyline
    fill="url(#SVGID_1_)"
    points="101.6,53.4 105.9,50.1 117,49.1 123.7,43.6 129.9,42.1 135.7,47 151.5,48.5 159.1,43.6
	162.5,39.9 172.1,43.6 177.6,46.4 182.9,48.5 195.8,44.5 201.6,46.1 217.3,39 241.7,27.9 259.8,7.9 278.9,20.5 302.5,29.7
	325.7,51.6 344.8,62.4 350.4,68.8 362.1,74.7 368.5,80.5 19,80.5 20,79.3 43.4,71 48.6,71.9 68.3,66.4 71.4,67.6 85.4,59.5
	88.8,54.2 " />
</svg>
