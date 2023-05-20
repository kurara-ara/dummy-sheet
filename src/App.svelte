<script lang="ts">
  // Import components
  import  Debug  from './components/Debug.svelte'
  import  Themer  from './components/Themer.svelte'
  import  Sheet  from './components/Sheet.svelte'
  
  // Import stores
  import { sheet } from './stores'
  import { editing } from './stores';

  let debug:boolean = true;
  function toggleEditing(){ 
    $editing = !$editing;
  }

</script>

<Themer>
  <main>
    <button on:click={toggleEditing}>Edit</button>
    <h1 bind:innerHTML={$sheet.name} contenteditable="true"></h1>
    <Sheet bind:sheet={$sheet}/>
  </main>
</Themer>

<style lang="scss">
  main {
    background: rgb(var(--secondary));
    margin: 0 0;
    padding: 1rem;
  }
  h1 {
    text-shadow: var(--shadow);
    color: rgb(var(--accent));
    text-align: right;
  }
</style>