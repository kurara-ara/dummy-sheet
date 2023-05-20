<script lang="ts">
    // Import components
    import AddSection from "./AddSection.svelte";
    import EditToggle from "./EditToggle.svelte";

    // Import stores
    import { sheet } from '../stores'
</script>

<div>
    <EditToggle/>
    <AddSection bind:sections={$sheet.sections}/>
</div>

<style>
    div {
        margin-top: 1rem;
        display:block;
        overflow: auto;
    }
</style>