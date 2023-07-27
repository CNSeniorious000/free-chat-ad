<script>
  import { fade } from "svelte/transition";
  import FadeIn from "./FadeIn.svelte";
  export let text = "";
</script>

{#each text as letter}
  {@const r = Math.random()}
  <span in:fade|global={{ delay: 400 * r, duration: 400 + 200 * r }} out:fade|global={{ delay: 150 * r, duration: 150 + 100 * r }}>{letter}</span>
{/each}
