<script>
  import { distance } from '../physics.js';
  export let id
  export let bornAt
  export let size
  export let bornAtDistance
  export let activeHay;

  const creationOffset = 600;
  const parallaxWeight = 1;

  $: if (Math.abs($distance - bornAtDistance) > window.innerWidth + creationOffset) {
    activeHay.set($activeHay.filter((hay) => hay.id !== id));
  }
</script>

<style>
  svg {
    align-self: flex-end;
  }
</style>

<svg
  viewBox="0 -100 500 500"
  width={size}
  style="
  {bornAt < 0 ? 'left: ' : 'right: '}{-creationOffset}px;
  transform: translateX({(bornAtDistance - $distance) * parallaxWeight}px);
  ">
  <defs>
    <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="150%">
      <stop offset="0%" stop-color="sandybrown" />
      <stop offset="100%" stop-color="gainsboro" />
    </linearGradient>
  </defs>
  <path
    fill="url(#linear)"
    d="M42.1,414.1l32.1,96.4h16.1h41.7h23.5h32.7h22.2h13.5h10.8h11.7h12.3H273h20.3H307h0.6h20.3h3.3h2h7.3h19.6h10.6h1.7h22.7h80.6l32.1-96.4H401.2c6.4-45.6,18.8-93.4,41.9-134.1c0,0-11.6,11.5-25.5,38.5c5.9-48.6,1.5-78.7-0.7-89.4c14.4-40.1,33.3-79.2,58-113.4c0,0-90.1,70-129.4,298.5h-5.3c0.9-19.6,2.5-40.2,5-61.2c7.3-31,18-61.6,33.5-89c0,0-11.8,11.7-25.8,39.2c9.6-50.5,25.4-101.4,50.6-146c0,0-68.8,67.1-90.4,257h-20.8c-0.2-3.5-0.3-7-0.5-10.7c3.3-82.1,18.2-182.3,63.5-262.4c0,0-30.2,29.5-56.9,104.8c8.4-62.8,25.2-128.8,56.9-185.1c0,0-91.6,89.2-96.6,353.4h-11.7c-1.3-5.8-2.5-11.8-3.7-18c2.6-83.7,17-188.2,63.9-271.2c0,0-49,47.8-77.3,177c-5.5-64.7-3.4-135.1,16.5-198.5c0,0-58.3,87.7-31.6,297.7c-0.4,4.3-0.8,8.7-1.1,13.1h-10.9c-5-18.7-10.3-36.1-15.8-52.5c23.3-153.8,0-216.9,0-216.9c6,52.2,1.8,110.3-6.5,165c7.5-192.8-51.1-270-51.1-270c29.4,77.1,32.4,166.5,26.2,243.1c-46.4-98.2-93.5-130.2-93.5-130.2c41.5,50.3,69.7,113.2,88.9,174.1c-4.4,34.3-10.1,64.4-15.2,87.4L42.1,414.1L42.1,414.1z M415.7,232.6c-1.4,59.1-17.2,118.8-38.3,173.1C383.4,354.4,394.6,292.5,415.7,232.6z" />
</svg>
