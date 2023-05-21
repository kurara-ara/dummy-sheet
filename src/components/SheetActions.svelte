<script lang="ts">
    // Import components
    import AddSection from "./AddSection.svelte";
    import EditToggle from "./EditToggle.svelte";
    import ThemeEditor from "./ThemeEditor.svelte";

    // Import stores
    import { sheet } from '../stores'
</script>

<div>
    <ThemeEditor/>
    <AddSection bind:sections={$sheet.sections}/>
    <EditToggle/>
</div>

<style lang="scss">
    div {
        margin-top: 1rem;
        display: grid;
        grid-gap: 0.5rem;
        grid-auto-flow: column;
        width: 100%;
        justify-content: end;
    }
</style>