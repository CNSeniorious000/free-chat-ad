<script>
  import { fly } from "svelte/transition";
  import Feature from "./Feature.svelte";

  export let type = "";

  /**
   * @type {string[]}
   */
  let features = [];

  $: {
    features = (() => {
      switch (type) {
        case "ic":
          return ["接收最新通知", "切换 16K 线路", "周边应用", "获得联系方式"];
        case "ac":
          return ["登录官方 ChatGPT", "登录 iOS APP", "官方安卓APP也即将发布"];
        case "wg":
          return ["防止失联", "私有化部署(超容易)", "了解最新动态", "咨询合作"];
        case "as":
          return ["仿 AntFu 极简风格 UI", "微调模型参数", "编辑上下文", "由第三方维护"];
        default:
          return [];
      }
    })();
  }
</script>

<div class="flex flex-row font-bold min-w-max text-sm gap-2 overflow-hidden dark:font-normal">
  <div class="hidden sm:contents">
    {#each features as feature, index}
      <div in:fly|global={{ y: 3, delay: 550 - index * 100 }}><Feature {feature} /></div>
    {/each}
  </div>
  <div class="contents sm:hidden">
    <div class="flex flex-col mt-1 gap-1">
      <div class="flex flex-row gap-2">
        {#each features.slice(0, 2) as feature, index}
          <div in:fly|global={{ y: 3, delay: 250 + index * 100 }}><Feature {feature} /></div>
        {/each}
      </div>
      <div class="flex flex-row gap-2">
        {#each features.slice(2, 4) as feature, index}
          <div in:fly|global={{ y: 3, delay: 350 + index * 100 }}><Feature {feature} /></div>
        {/each}
      </div>
    </div>
  </div>
</div>
