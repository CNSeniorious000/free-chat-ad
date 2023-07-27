<script>
  import FeatureList from "./FeatureList.svelte";
  import Title from "./Title.svelte";
  import Logo from "./Logo.svelte";
  import Background from "./Background.svelte";
  import Action from "./Action.svelte";
  import Slogan from "./Slogan.svelte";
  import Before from "./Before.svelte";
  import FadeIn from "./FadeIn.svelte";
  import { backOut, cubicOut } from "svelte/easing";
  import { fade, fly, scale } from "svelte/transition";
  import { onMount } from "svelte";

  export let data;
  const { type, href } = data;

  let mounted = false;
  let show = false;
  let dark = false;

  onMount(() => {
    mounted = true;
    window.addEventListener("message", (event) => {
      dark = event.data.darkMode;
    });
    parent?.postMessage("mounted", "*");
  });
</script>

{#if mounted}
  <div class="font-sans font-montserrat text-xs whitespace-nowrap" class:dark>
    <a {href} target="_blank" class="h-screen w-screen top-0 left-0 text-[#444444] fixed dark:text-[#ddddf0]">
      {#if show}
        <Background />

        <div class="contents sm:hidden">
          <div class="flex flex-row h-full left-6 absolute items-center">
            <div class="flex flex-col">
              <div class="flex flex-row gap-1 items-center">
                <div in:fly={{ y: 3, duration: 500, easing: cubicOut }} class="w-6">
                  <FadeIn><Logo {type} /></FadeIn>
                </div>
                <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 50 }}>
                  <Title {type} />
                </div>
                <div>-</div>
                <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 100 }}>
                  <Slogan {type} />
                </div>
              </div>
              <div>
                <FeatureList {type} />
              </div>
            </div>
          </div>
          <div in:scale={{ start: 0.5, delay: 800, duration: 850, easing: backOut }} class="right-6 bottom-5.5 absolute">
            <Action {type} />
          </div>
        </div>

        <div class="hidden sm:contents">
          <div class="flex flex-col h-full transition-[right] right-6 gap-1 absolute justify-center items-end md:right-10">
            <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 50 }}>
              <Title {type} />
            </div>
            <FeatureList {type} />
          </div>

          <div class="flex flex-row h-full transition-[left] left-6 gap-4 absolute items-center md:left-10">
            <div in:fly={{ y: 5, duration: 500 }} class="bg-white rounded-1/3 h-13 shadow-lg ring-inset p-1.7 shadow-black/15 ring-[#ddddf0] w-13 dark:bg-[#212129] dark:shadow-black/40 dark:ring-1.5">
              <FadeIn delay={50}>
                <Logo {type} />
              </FadeIn>
            </div>

            <div class="flex flex-col gap-2.5 translate-y-0.8">
              <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 150 }}>
                <Slogan {type} />
              </div>
              <div in:fly={{ x: 50, duration: 600, easing: backOut, delay: 1000 }}>
                <Action {type} />
              </div>
            </div>
          </div>
        </div>
      {:else}
        <Before bind:show />
      {/if}
    </a>
  </div>
{:else}
  <div transition:fade={{ duration: 150 }} class="text-xl right-1/2 bottom-1/2 text-[#80808080] translate-x-1/2 translate-y-1/2 fixed">
    <div class="i-svg-spinners-6-dots-scale-middle" />
  </div>
{/if}

<svelte:head>
  {#if href}
    <link rel="dns-prefetch" {href} />
    <link rel="preconnect" {href} />
  {/if}
</svelte:head>

<style>
  :global(:root) {
    letter-spacing: min(0.01em, 0.1pt);
    font-size: 0.85rem;
  }

  /* :global(*:not(html, body, body > * > *)) {
    border: solid 1px #80808080;
  } */
</style>
