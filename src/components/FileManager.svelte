<script lang="ts">
    // Import store
    import { editing } from "../stores";
    import FileExport from "./FileExport.svelte";
    import FileImport from "./FileImport.svelte";

</script>

{#if !$editing}
    <FileImport/>
    <FileExport/>
{/if}