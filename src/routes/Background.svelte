<script>
  import Logo from "./Logo.svelte";
  import FadeIn from "./FadeIn.svelte";
  import { cubicOut } from "svelte/easing";
  import { fly } from "svelte/transition";
</script>

<div class="h-full w-full top-0 left-0 z--1 fixed">
  <div in:fly={{ y: 15, duration: 1000, delay: 100, easing: cubicOut }} class="opacity-4 transition-top top--14 left--15 w-80 duration-2000 absolute filter-brightness-0 <sm:top-0 dark:filter-brightness-1000"><FadeIn duration={1000}><Logo /></FadeIn></div>
  <div in:fly={{ y: -15, duration: 1000, delay: 100, easing: cubicOut }} class="opacity-4 transition-bottom right--17 bottom--15 w-80 duration-2000 absolute filter-brightness-0 <sm:bottom--5 dark:filter-brightness-1000"><FadeIn duration={1000}><Logo /></FadeIn></div>
</div>
