<script lang="ts">
  // Import components
  import  Themer  from './components/Themer.svelte'
  import { onMount } from "svelte";
  import GmBinderTabs from './components/GMBinderTabs.svelte';
  import  Sheet  from './components/Sheet.svelte'
  import OBR from "@owlbear-rodeo/sdk";

  import { sheet } from './stores'
  import * as OBRHelper from './services/OBRHelper'
  const { isGM } = OBRHelper;

  onMount(() => {
    if (OBR.isAvailable) {
      OBRHelper.init();
    } else {
    }
  });


</script>

<Themer>
  <main>
    {#if $isGM}
    <GmBinderTabs/>
    {/if}
    <Sheet bind:sheet={$sheet}/>
  </main>
  <footer>
    <a target="_blank" href="https://github.com/kurara-ara/dummy-sheet">Github</a>
  </footer>
</Themer>

<style lang="scss">
  main {
    background: rgb(var(--secondary));
    height:100%;
  }
  footer {
    background: rgb(var(--secondary));
    clear: both;
    position: relative;
    min-height: 2rem;
    margin-top: 0;
    padding: 2rem;
    a {
      text-decoration: none;
      float: right;
      color: rgb(var(--accent));
    }
  }
</style>