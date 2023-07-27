<script>
  export let type = "";
</script>

<div id="action" class="rounded-full flex flex-row ring-inset w-fit py-1.4 px-3 transition-all ring-1.3 gap-1 items-center overflow-x-hidden">
  {#if type === "ic"}
    <span>点击打开官网</span>
    <span class="i-ic-round-arrow-forward-ios !text-sm" />
  {:else if type === "ac"}
    <span>点击跳转</span>
    <span class="i-pajamas-external-link !text-sm" />
  {:else if type === "wg"}
    <span class="i-mingcute-wechat-fill !text-lg" />
    <span>点击前往二维码页面</span>
  {:else if type === "as"}
    <span>免费使用</span>
    <span class="i-fluent-sparkle-16-filled !text-lg" />
  {/if}
</div>

<style lang="postcss">
  div {
    --uno: ring-sky-600 bg-sky-600 text-white;
    --uno: dark:(bg-white text-[#212129] ring-white);
    --uno: [a:hover_&]:(bg-sky-600/10 text-sky-600 dark:bg-white/10 dark:text-white);
  }

  span {
    @apply font-bold flex-shrink-0 text-xs;
  }
</style>
