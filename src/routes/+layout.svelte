<script>
  import { dev } from "$app/environment";
  import "@unocss/reset/tailwind-compat.css";
  import { PUBLIC_GA_TRACKING_ID } from "$env/static/public";
  import "uno.css";
</script>

<svelte:head>
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id={PUBLIC_GA_TRACKING_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", PUBLIC_GA_TRACKING_ID);
    </script>
  {/if}
</svelte:head>

<slot />
