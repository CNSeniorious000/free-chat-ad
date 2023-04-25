<script>
  export let type = "";
</script>

<h1 class="m-0 text-lg sm:text-2xl font-montserrat font-700 dark:text-white">
  {#if type === "iOS"}
    懂王
  {:else if type === "Chrome"}
    ChatGPT Sidebar
  {:else if type === "Edge"}
    Sider - AI Sidebar
  {:else}
    ChitChat
  {/if}
</h1>
