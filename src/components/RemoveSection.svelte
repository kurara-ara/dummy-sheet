<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";
    import { editing } from '../stores';

    $: editable = $currentPlayerId === $viewingPlayerId; 
    const dispatch = createEventDispatcher();

    export let section;

    function onRemoveSection() {
        dispatch('removeSection', section);
    }

</script>

{#if editable && $editing}
<button on:click={onRemoveSection}>
    Remove Section
</button>
{/if}

<style lang="scss">
    button {
        margin-top: 0.25rem;
        box-sizing: border-box;
        width: 100%;
        background: rgba(var(--accent),0);
        border: 1px solid rgb(var(--accent));
        border-radius: 0.15rem;
        color: rgb(var(--accent));
        font-size: 1rem;
        font-weight: 300;
        text-transform: uppercase;
        cursor: pointer;
        transition: background ease-in-out 150ms;
        transition: color ease-in-out 150ms;
        &:hover {
            background: rgba(var(--accent),1);
            color: rgb(var(--secondary));
        }
    }
</style>