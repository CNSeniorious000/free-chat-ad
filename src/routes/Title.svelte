<script>
  export let type = "ic";
</script>

<h1 class="font-montserrat font-700 m-0 text-lg sm:text-2xl dark:text-white">
  {#if type === "ic"}
    Free Chat 官网
  {:else if type === "ac"}
    免费 OpenAI 账号
  {:else if type === "wg"}
    Free Chat 用户微信群
  {:else if type === "as"}
    Free Anse
  {/if}
</h1>
