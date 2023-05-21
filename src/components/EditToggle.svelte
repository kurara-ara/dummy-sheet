<script lang="ts">
    //Import stores
    import { editing } from '../stores'

    function toggleEditing(){
        $editing = !$editing;
    }
</script>

{#if $editing}
<button style="font-style:italic;" on:click={toggleEditing}>Editing&hellip;</button>
{:else}
<button on:click={toggleEditing}>Edit</button>
{/if}

<style lang="scss">
    button {
        margin-right: 0px;
        float: right;
        background: rgba(var(--accent),0);
        border: 1px solid rgb(var(--accent));
        border-radius: 0.15rem;
        color: rgb(var(--accent));
        font-size: 1.2rem;
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