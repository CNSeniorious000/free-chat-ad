<script>
  export let type = "";
</script>

<div class="font-semibold text-[15px] dark:font-normal">
  {#if type === "ic"}
    了解更多：通知、文档、联系方式等
  {:else if type === "ac"}
    登录官网 ChatGPT
  {:else if type === "wg"}
    为防止域名再次被封导致失联
  {:else if type === "as"}
    Get answers from AI elegantly.
  {/if}
</div>
