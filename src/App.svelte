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