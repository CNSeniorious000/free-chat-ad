<script>
  import RandomFadeIn from "./RandomFadeIn.svelte";

  import { onMount } from "svelte";
  import { fly, slide } from "svelte/transition";

  export let show;

  let state = 0;

  onMount(() => {
    state = 1;
    setTimeout(() => (state = 2), 1100);
    setTimeout(() => (state = 3), 2500);
    setTimeout(() => (show = true), 3000);
  });
</script>

<div class="flex flex-col h-full tracking-widest w-full justify-center items-center absolute">
  {#if 1 <= state && state <= 2}
    <div in:fly|global={{ y: 5, duration: 300 }} class="flex flex-row m-0 text-base transition-all ease-out gap-0 duration-500" class:scale-130={state === 1} class:op-50={state === 2}>
      <!-- <RandomFadeIn text="只有大家持续的捐赠才能帮助我们维持运营" /> -->
      <RandomFadeIn text="请大家点击右上角的存钱罐图标进行捐赠~谢谢大家" />
    </div>
  {/if}
  {#if state === 2}
    <div in:slide={{ duration: 700 }} class="flex flex-row m-0 text-xl">
      <!-- <RandomFadeIn text="请大家点击右上角的存钱罐图标进行捐赠~谢谢大家" /> -->
      <RandomFadeIn text="也希望大家能支持支持我的其它项目" />
    </div>
  {/if}
</div>
