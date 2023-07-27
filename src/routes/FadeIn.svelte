<script>
  import { blur, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let delay = 0;
  export let duration = 500;
</script>

<div in:blur|global={{ delay, duration, amount: 5, opacity: 1, easing: quintOut }}>
  <div in:scale|global={{ delay, duration, start: 0.7, easing: quintOut }}>
    <slot />
  </div>
</div>
