<script>
  import { PUBLIC_GA_TRACKING_ID } from "$env/static/public";
  import { onMount } from "svelte";
  import { UAParser } from "ua-parser-js";

  import "uno.css";

  import FeatureList from "./FeatureList.svelte";
  import Title from "./Title.svelte";
  import Logo from "./Logo.svelte";
  import Background from "./Background.svelte";
  import Action from "./Action.svelte";
  import Slogan from "./Slogan.svelte";
  import { backOut, cubicOut } from "svelte/easing";
  import { fade, fly, scale } from "svelte/transition";

  let href = "";
  let type = "";
  let mounted = false;

  let dark = false;

  $: console.log({ dark });

  function handleClick() {
    if (type === "iOS") gtag("event", "click_ChitChat", { event_category: "promotion", event_label: "button_iOS" });
    else if (type === "Chrome") gtag("event", "click_Sidebar", { event_category: "promotion", event_label: "button_Chrome" });
    else if (type === "Edge") gtag("event", "click_Sider", { event_category: "promotion", event_label: "button_Edge" });
    else gtag("event", "click_ChitChatSite", { event_category: "promotion", event_label: "button_other" });
  }

  onMount(() => {
    window.addEventListener("message", (event) => {
      dark = event.data.darkMode;
      mounted = true;
    });
    parent?.postMessage("mounted", "*");

    const { browser, os } = UAParser();
    if (os.name === "iOS") {
      type = "iOS";
      href = "https://apps.apple.com/cn/app/chitchat-chat-pdf/id6446394143";
    } else if (browser.name === "Chrome") {
      type = "Chrome";
      href = "https://chrome.google.com/webstore/detail/chatgpt-sidebar-support-g/difoiogjjojoaoomphldepapgpbgkhkb";
    } else if (browser.name === "Edge") {
      type = "Edge";
      href = "https://microsoftedge.microsoft.com/addons/detail/sider-ai-sidebar/dhoenijjpgpeimemopealfcbiecgceod";
    } else {
      href = "https://gochitchat.ai/";
    }

    gtag("js", new Date());
    gtag("config", "G-F8K8V9N5K4");
  });
</script>

{#if mounted}
  <div class="font-sans text-xs whitespace-nowrap" class:dark>
    <a on:click={handleClick} {href} target="_blank" class="fixed left-0 top-0 w-screen h-screen text-[#444444] dark:text-[#ddddf0]">
      <Background />

      <div class="contents sm:hidden">
        <div class="absolute left-6 flex flex-row h-full items-center justify-between">
          <div class="flex flex-col">
            <div class="flex flex-row items-center">
              <div in:fly={{ y: 3, duration: 500, easing: cubicOut }} class="w-7">
                <Logo />
              </div>
              <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 50 }} class="ml-1">
                <Title {type} />
              </div>
              <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 100 }} class="ml-2">
                <Slogan {type} />
              </div>
            </div>
            <div>
              <FeatureList {type} />
            </div>
          </div>
        </div>
        <div in:scale={{ start: 0.5, delay: 800, duration: 850, easing: backOut }} class="absolute right-6 bottom-5.5">
          <Action {type} />
        </div>
      </div>

      <div class="hidden sm:contents">
        <div class="absolute h-full right-6 md:right-10 transition-[right] flex flex-col justify-center items-end gap-1">
          <div in:fly={{ y: 3, duration: 500, easing: cubicOut, delay: 50 }}>
            <Title {type} />
          </div>
          <FeatureList {type} />
        </div>

        <div class="absolute h-full left-6 md:left-10 transition-[left] flex flex-row gap-4 items-center">
          <div in:fly={{ y: 5, duration: 500 }} class="h-13 w-13 p-1.7 bg-white dark:bg-[#212129] ring-inset dark:ring-1.5 ring-[#ddddf0] rounded-1/3 shadow-black/15 dark:shadow-black/40 shadow-lg">
            <div>
              <Logo />
            </div>
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
    </a>
  </div>
{:else}
  <div transition:fade={{ duration: 150 }} class="fixed right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-[#80808080] text-xl">
    <div class="i-svg-spinners-6-dots-scale-middle" />
  </div>
{/if}

<svelte:head>
  <script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_TRACKING_ID}"></script>
  {#if href}
    <link rel="dns-prefetch" {href} />
    <!-- <link rel="preconnect" {href} /> -->
  {/if}

  <script async src="https://www.googletagmanager.com/gtag/js?id=G-F8K8V9N5K4"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
  </script>
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
