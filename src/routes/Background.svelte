<script>
  import Logo from "./Logo.svelte";
  import { cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
</script>

<div class="fixed left-0 top-0 w-full h-full z--1">
  <div in:fly={{ y: 15, duration: 1000, delay: 100, easing: cubicOut }} class="absolute duration-2000 transition-top left--17 top--17 <sm:top-0 w-80 filter-brightness-0 dark:filter-brightness-1000 opacity-3"><Logo /></div>
  <div in:fly={{ y: -15, duration: 1000, delay: 100, easing: cubicOut }} class="absolute duration-2000 transition-bottom right--17 bottom--23 <sm:bottom--5 w-80 filter-brightness-0 dark:filter-brightness-1000 opacity-3"><Logo /></div>
</div>
