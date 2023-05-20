<script lang="ts">
  // Import components
  import  Themer  from './components/Themer.svelte'
  import  Sheet  from './components/Sheet.svelte'

  import { sheet } from './stores'


</script>

<Themer>
  <main>
    <Sheet bind:sheet={$sheet}/>
  </main>
</Themer>

<style lang="scss">
  main {
    background-color: rgb(var(--secondary));
    position:absolute;
    top:0;
    width:100%;
    height:100%;
    margin:0px;
  }
</style>