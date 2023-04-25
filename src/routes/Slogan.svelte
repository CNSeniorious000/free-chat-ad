<script>
  export let type = "";
</script>

<div class="text-[15px] font-semibold dark:font-normal">
  {#if type === "iOS"}
    AI聊天新境界。懂你不懂，聊你想聊!
  {:else if type === "Chrome"}
    <span class="hidden md:display-[unset]">一款值得拥有的GPT插件!</span>
    效率翻倍，读写不累!
  {:else if type === "Edge"}
    您值得信赖的网页AI助理
  {:else}
    ChitChat - AI 聊天新玩法!
  {/if}
</div>
