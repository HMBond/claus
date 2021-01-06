<script>
  import Floor from './Floor.svelte';
  import Grass from './Grass.svelte';
  import Silhouette from './Silhouette.svelte';
  import Mountains from './Mountains.svelte';
</script>

<Mountains />
<Floor />
<Grass />
<slot>
  <h1>Where is Claus?</h1>
</slot>
<Silhouette />