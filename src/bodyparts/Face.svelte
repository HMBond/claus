<script>
  import { fly } from "svelte/transition";
  import Mouth from "./Mouth.svelte";
  import { hohoho } from "../actions";
  export let hakkakakka;
  export let fill;
  export let taliban;
</script>

<svg>
  <path
    out:fly={{ x: -8, y: -5 }}
    d="M83.225 135l-11 16 7-3-9 21.26 9-4.26-7 31 7-8 5 24 15-29-3.932 19.505 16.177-32s5.755 9.495 5.755 8.495-4.332-26.628-4.332-26.628l7.644 6.4L111.225 140M73.225 106.5c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5z"
    fill="{taliban ? "brown" : "white"}"
    class="beard-eye"
    stroke="#000"
    stroke-width="2"
  />
  <path
    out:fly={{ x: -10, y: -5 }}
    id="claus-inner-left-eyeball"
    d="M74.706 100.87c4.349 0 8.792 3.356 7.588 8.168-.717 2.87-6.067 4.901-5.48 4.901"
    fill="none"
    stroke="#000"
    stroke-width="2"
  />
  <path
    out:fly={{ x: -10 }}
    id="claus-nose"
    d="M95.284 112.675s-28.3 20.553-28.195 25.033c.105 4.48 33.781.052 33.781.052"
    fill={taliban ? "darkgoldenrod" : "white"}
    stroke="#000"
    stroke-width="2"
  />
  <path
    out:fly={{ x: 5, y: -10 }}
    id="claus-outer-right-eyeball"
    d="M87.225 106.5c0-8.008 6.492-14.5 14.5-14.5s14.5 6.492 14.5 14.5-6.492 14.5-14.5 14.5-14.5-6.492-14.5-14.5z"
    fill={taliban ? "red" : "white"}
    stroke="#000"
    stroke-width="2"
  />
  <path
    out:fly={{ x: 7, y: -10 }}
    id="claus-inner-right-eyeball"
    d="M101.45 106.298c-.521 0-1.296 2.946.58 2.477 1.793-.448 1.279-2.74-.37-2.74"
    fill="none"
    stroke="#000"
    stroke-width="4"
    stroke-linecap="round"
  />
  <Mouth {hakkakakka} {hohoho} />
</svg>
