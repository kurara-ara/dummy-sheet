<script>
    // Import components
    import Section from './Section.svelte'
    import AddSection from "./AddSection.svelte";

    // Import stores
    import { editing } from '../stores'

    // Export
    export let sheet;
</script>

<div>
    {#each sheet.sections as section (section.id)}
        <Section bind:section={section}/>
    {/each}
    {#if $editing}
    <AddSection bind:sections={sheet.sections}/>
    {/if}
</div>

<style lang="scss">
    div {
        width:75%;
        margin:0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 2rem;
    }
</style>