<script>
  import { fly } from "svelte/transition";
  import Feature from "./Feature.svelte";

  export let type = "";

  /**
   * @type {string[]}
   */
  let features = [];

  $: {
    switch (type) {
      case "iOS":
        features = ["100+AI专家", "PDF智能问答", "支持GPT, Bard, Bing", "自定义AI角色"];
        break;
      case "Chrome":
      default:
        features = ["无需梯子", "AI 聊天", "智能读写", "即将支持 GPT-4"];
    }
  }
</script>

<div class="flex flex-row gap-2 text-sm font-bold min-w-max dark:font-normal overflow-hidden">
  <div class="hidden sm:contents">
    {#each features as feature, index}
      <div in:fly={{ y: 3, delay: 550 - index * 100 }}><Feature {feature} /></div>
    {/each}
  </div>
  <div class="contents sm:hidden">
    <div class="flex flex-col gap-1 mt-1">
      <div class="flex flex-row gap-2">
        {#each features.slice(0, 2) as feature, index}
          <div in:fly={{ y: 3, delay: 250 + index * 100 }}><Feature {feature} /></div>
        {/each}
      </div>
      <div class="flex flex-row gap-2">
        {#each features.slice(2, 4) as feature, index}
          <div in:fly={{ y: 3, delay: 350 + index * 100 }}><Feature {feature} /></div>
        {/each}
      </div>
    </div>
  </div>
</div>
