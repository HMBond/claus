<script>
  import { distance, speed } from '../physics.js';
  export let id;
  export let bornAt;
  export let size;
  export let bornAtDistance;
  export let activeMountains;
  export let mirror;

  const creationOffset = 3500;
  const parallaxWeight = 0.2;

  $: if (
    Math.abs($distance - bornAtDistance) * parallaxWeight >
    window.innerWidth + creationOffset
  ) {
    activeMountains.set(
      $activeMountains.filter((mountain) => mountain.id !== id)
    );
  }
</script>

<svg
  viewBox="0 0 379.6 81"
  width={size - 0.8 * $speed}
  style="bottom: 40vh;
  {bornAt < 0 ? 'left: ' : 'right: '}{-creationOffset}px;
  transform: translateX({(bornAtDistance - $distance) * parallaxWeight}px) scaleX({mirror ? -1 : 1});
  ">
  <linearGradient
    id="SVGID_1_"
    gradientUnits="userSpaceOnUse"
    x1="79"
    y1="-48"
    x2="293"
    y2="193">
    <stop offset="0.1" style="stop-color:#2BB67350" />
    <stop offset="0.3" style="stop-color:#A9B69270" />
    <stop offset="0.5" style="stop-color:#00683880" />
    <stop offset="0.7" style="stop-color:#699961" />
    <stop offset="0.9" style="stop-color:#168950" />
  </linearGradient>
  <polyline
    fill="url(#SVGID_1_)"
    points="101.6,53.4 105.9,50.1 117,49.1 123.7,43.6 129.9,42.1 135.7,47 151.5,48.5 159.1,43.6
	162.5,39.9 172.1,43.6 177.6,46.4 182.9,48.5 195.8,44.5 201.6,46.1 217.3,39 241.7,27.9 259.8,7.9 278.9,20.5 302.5,29.7
	325.7,51.6 344.8,62.4 350.4,68.8 362.1,74.7 368.5,80.5 19,80.5 20,79.3 43.4,71 48.6,71.9 68.3,66.4 71.4,67.6 85.4,59.5
	88.8,54.2 " />
</svg>
