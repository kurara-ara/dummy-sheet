<script lang="ts">
    import { editing } from "../stores";
    import { currentPlayerId, viewingPlayerId } from "../services/OBRHelper";
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let stat;
    $: editable = $currentPlayerId === $viewingPlayerId; 

    function onRemoveStat() {
        dispatch('removeStat', stat);
    }
</script>

{#if editable && $editing}
<button on:click={onRemoveStat}>&times;</button>
{/if}

<style lang="scss">
    button {
        box-sizing: border-box;
        color: rgba(var(--accent), 0.25);
        background:transparent;
        border:none;
        height: 1rem;
        width: 1rem;
        padding:0;
        font-size: 1.2rem;
        vertical-align: top;
        line-height: 1rem;
        transition: color ease-in-out 150ms;
        &:hover{
            color: rgba(var(--accent), 1);
        }
    }
</style>