<script>
  export let type = "";
</script>

{#if type === "as"}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="p-0.7 sm:p-1.4">
    <defs>
      <linearGradient id="a" x1="1" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#d0b6fa" />
        <stop offset="1" stop-color="#947cff" />
      </linearGradient>
      <linearGradient id="b" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stop-color="#6ee7b7" />
        <stop offset="1" stop-color="#a5f3fc" />
      </linearGradient>
    </defs>
    <path fill="url(#a)" d="M32.212 6.875C45.9522 6.875 57.125 18.3583 57.125 31.9914C57.125 45.6244 45.9695 57.0999 32.212 57.0999L6.875 57.125V31.5595C6.875 17.9344 18.4561 6.87657 32.212 6.87657V6.875Z" />
  </svg>
{:else}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <defs>
      <linearGradient id="a" x1="1" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#d0b6fa" />
        <stop offset="1" stop-color="#947cff" />
      </linearGradient>
      <linearGradient id="b" x1="0" x2="1" y1="1" y2="0">
        <stop offset="0" stop-color="#6ee7b7" />
        <stop offset="1" stop-color="#a5f3fc" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="30" fill="url(#b)" />
  </svg>
{/if}
