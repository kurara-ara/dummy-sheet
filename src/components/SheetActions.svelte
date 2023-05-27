<script lang="ts">
    // Import components
    import AddSection from "./AddSection.svelte";
    import EditToggle from "./EditToggle.svelte";
    import ThemeEditor from "./ThemeEditor.svelte";
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";

    // Import stores
    import { sheet } from '../stores'
    import FileManager from "./FileManager.svelte";
</script>

{#if $currentPlayerId === $viewingPlayerId}
<div>
    <FileManager/>
    <ThemeEditor/>
    <AddSection bind:sections={$sheet.sections}/>
    <EditToggle/>
</div>
{/if}

<style lang="scss">
    div {
        margin-top: 1rem;
        margin-bottom: 1rem;
        display: flex;
        flex-wrap: wrap;
        grid-gap: 0.5rem;
        grid-auto-flow: column;
        width: 100%;
        justify-content: end;
    }
</style>