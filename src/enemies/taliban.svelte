<script>
  import { tweened } from 'svelte/motion';
  import { sineInOut } from 'svelte/easing';
  import { fade, draw, fly, scale } from 'svelte/transition';
  import Ak47 from '../guns/Ak47.svelte';
  import Body from './Body.svelte';
  import Face from './Face.svelte';
  import Miter from './Miter.svelte';
  import Staff from './Staff.svelte';
  import RightArm from './RightArm.svelte';
  import LeftArm from './LeftArm.svelte';
  import RightLeg from './RightLeg.svelte';
  import LeftLeg from './LeftLeg.svelte';

  const rotation = tweened(0, {
    easing: sineInOut
  });
</script>

<div style="transform: rotate({$rotation});">
  <LeftLeg />
  <RightLeg />
  <LeftArm />
  <Body />
</div>
