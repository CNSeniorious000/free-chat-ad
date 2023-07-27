<script>
  import { onMount } from "svelte";
  import { fade, fly, slide } from "svelte/transition";

  export let show;

  onMount(() => {
    setTimeout(() => (state = 2), 800);
    setTimeout(() => (state = 3), 3000);
    setTimeout(() => (show = true), 3400);
  });

  let state = 1;
</script>

<div class="flex flex-col h-full w-full gap-2 justify-center items-center absolute">
  {#if 1 <= state && state <= 2}
    <p in:fly|global={{ y: 5, duration: 300 }} out:fly={{ y: -5 }} class="m-0 text-base transition-all ease-out duration-500" class:scale-130={state === 1} class:op-50={state === 2}>只有大家持续的捐赠才能帮助我们维持运营</p>
  {/if}
  {#if state === 2}
    <div in:slide={{ duration: 700 }} out:fly={{ y: -5, delay: 100 }}>
      <p in:fade={{ duration: 500 }} class="m-0 text-xl">请大家点击右上角的存钱罐图标进行捐赠 谢谢大家</p>
    </div>
  {/if}
</div>
