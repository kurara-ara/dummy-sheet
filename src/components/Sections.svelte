<script lang="ts">
    // Import components
    import Section from "./Section.svelte";

    // Exports
    export let sections;

    function removeSection(section){
        sections = sections.filter(s => s.id !== section.id)
    }
</script>

<div>
    {#each sections as section (section.id)}
        <Section bind:section={section} on:removeSection={e => removeSection(e.detail)}/>
    {/each}
</div>

<style lang="scss">
    div {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        grid-template-rows: repeat(1, 1fr);
        grid-column-gap: 1.5rem;
        grid-row-gap: 2rem;
    }
    @media only screen and (min-width: 33.75em) {
        div {
            grid-template-columns: repeat(2, 1fr);
        }
    }
    @media only screen and (min-width: 60em) { /* 960px */
        div {
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>