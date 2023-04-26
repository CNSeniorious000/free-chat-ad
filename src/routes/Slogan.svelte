<script>
  export let type = "";
</script>

<div class="text-[15px] font-semibold dark:font-normal">
  {#if type === "iOS"}
    AI聊天新境界。懂你不懂，聊你想聊!
  {:else if type === "Chrome"}
    一款值得拥有的GPT插件! 效率翻倍，读写不累!
  {:else}
    <span class="sm:hidden"> - </span> Edge 上全球用户最多的 ChatGPT 插件
  {/if}
</div>
