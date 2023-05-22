<script lang="ts">
    // Import components
    import { onMount } from 'svelte'
    import Sections from './Sections.svelte'
    import SheetActions from './SheetActions.svelte';
    import Notes from './Notes.svelte';
    import OBR from '@owlbear-rodeo/sdk';

    let player = ""

    // Import stores
    import { editing } from '../stores'
    
    // Exports
    export let sheet;
    
    function toggleEditing(){ 
      $editing = !$editing;
    }

    function removeSection(section){
        sheet.sections = sheet.sections.filter(t => t.id !== section.id)
    }

</script>

<div>
    {#if $editing}
    <h1 bind:innerText={sheet.name} contenteditable="true"></h1>
    {:else}
    <h1>{sheet.name}</h1>
    {/if}
    <h4>{player}</h4>
    <SheetActions/>
    <Sections bind:sections={sheet.sections}/>
    <Notes bind:notes={sheet.notes}/>
</div>

<style lang="scss">
    div {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    h1 {
        margin: 1rem 0 0 1rem;
        color:rgb(var(--accent));
        text-align: right;
    }
    h4 {
        font-weight:300;
        margin:0;
        color:rgb(var(--accent));
        text-align: right;
    }
    @media only screen and (min-width: 33.75em) {
        div {
            width: 85%;
        }
    }
    @media only screen and (min-width: 60em) { /* 960px */
        div {
            width: 75%;
            max-width: 60rem;
        }
    }
</style>