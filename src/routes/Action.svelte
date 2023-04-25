<script>
  export let type = "";
</script>

<div id="action" class="bg-[#3771e0] dark:bg-white dark:text-[#212129] ring-[#3771e0] dark:ring-white ring-1.3 ring-inset transition-all w-fit px-3 py-1.4 text-white rounded-full flex flex-row items-center gap-1.3 overflow-x-hidden">
  {#if type === "iOS"}
    <span class="i-mingcute-appstore-fill text-base" />
    <span class="text-xs font-bold">立即下载</span>
  {:else if type === "Chrome"}
    <span class="i-logos-chrome-web-store text-xs" />
    <span class="text-xs font-bold">免费下载</span>
  {:else if type === "Edge"}
    <span class="i-logos-microsoft-icon text-xs" />
    <span class="text-xs font-bold">免费下载</span>
  {:else}
    <span class="text-xs font-bold">立即查看</span>
  {/if}
</div>

<style>
  :global(a:hover #action) {
    background: #3771e020;
    color: #3771e0;
  }

  :global(.dark a:hover #action) {
    background: #ffffff20;
    color: white;
  }
</style>
