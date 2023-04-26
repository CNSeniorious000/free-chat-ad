<script>
  export let type = "";
</script>

<h1 class="m-0 text-lg sm:text-2xl font-montserrat font-700 dark:text-white">
  {#if type === "iOS"}
    懂王
  {:else if type === "Chrome"}
    ChatGPT Sidebar
  {:else}
    Sider <span class="<sm:hidden"> - ChatGPT 侧边栏</span>
  {/if}
</h1>
