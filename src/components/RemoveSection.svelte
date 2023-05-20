<script lang="ts">
    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher();

    export let section;

    function onRemove() {
        dispatch('remove', section);
    }
</script>

<button on:click={onRemove}>
    &times;
</button>


<style lang="scss">
    button {
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