<script>
  import "@fontsource/fira-code/500.css";
  export let type = "ic";
</script>

<h1 class="font-montserrat font-700 m-0 text-lg sm:text-2xl dark:text-white">
  {#if type === "ic"}
    Free Chat 官网
  {:else if type === "ac"}
    免费 OpenAI 账号
  {:else if type === "wg"}
    Free Chat 用户微信群
  {:else if type === "promplate"}
    <span class="font-[fira_code]">&nbsp;&lt;/<span class="mx-1">Promplate</span>/&gt;</span>
  {:else if type === "as"}
    Free Anse
  {/if}
</h1>

<style>
  span {
    font-feature-settings: "ss01", "ss02", "ss03", "ss04", "ss05", "ss06", "zero", "onum" !important;
  }
</style>
