<script lang="ts">
    
    // Import components
    import Stats from './Stats.svelte'
    import RemoveSection from './RemoveSection.svelte';

    // Import Stores
    import { editing } from '../stores';

    // Export
    export let section;

</script>

<div>
    {#if $editing}

    <h2 bind:innerHTML={section.name} contenteditable="true">{section.name}</h2>
    {:else}
    <h2>{section.name}</h2>
    {/if}
    <Stats bind:stats={section.stats}/>
    {#if $editing}
    <RemoveSection bind:section={section} on:removeSection/>
    {/if}
</div>

<style lang="scss">
    div {
        padding: 1rem 0.5rem;
        border-width: 0.15rem;
        border-style: solid;
        border-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(var(--accent)), rgba(0, 0, 0, 0)) 1 100%;
        border-right: none;
    }
    h2 {
        text-shadow: var(--shadow);
        color: rgb(var(--accent));
        font-size: 1.2rem;
        margin-top:0;
        margin-bottom:0;
    }
</style>