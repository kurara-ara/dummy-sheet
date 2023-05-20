<script lang="ts">
    import { editing } from "../stores";
    import RemoveStat from "./RemoveStat.svelte";

    $: newStatId = stats.length > 0 ? Math.max(...stats.map(t => t.id)) + 1 : 1

    function addStat(){
        stats = [...stats,
                {
                    id: newStatId,
                    name: "New Field",
                    value: "-"
                }
            ]
        }
    function removeStat(stat) {
        stats = stats.filter(t => t.id !== stat.id)
    }


    export let stats;

</script>

<table>
    {#each stats as stat (stat.id)}
    <tr>
        {#if $editing}
        <td contenteditable="true" bind:innerHTML={stat.name}></td>
        {:else}
        <td>{stat.name}</td>
        {/if}
        <td contenteditable="true" bind:innerHTML={stat.value}></td>

        {#if $editing}
        <td style="width:0.5rem;"><RemoveStat bind:stat={stat} on:remove={e => removeStat(e.detail)}/></td>
        {/if}
    </tr>
    {/each}
</table>

{#if $editing}
<div class="buttons">
    <button on:click={addStat}>Add Row</button>
</div>
{/if}

<style lang="scss">
    table {
        border-collapse: collapse;
        width: 100%;
    }
    tr:nth-last-child(2n+1) {
        background: rgba(var(--accent), 0.05);
    }
    td {
        text-shadow: var(--shadow);
        padding: 0 0.5rem;
        color: rgba(var(--primary), 0.85);
        vertical-align: top;
        width:auto;
        &:not(:first-child) {
            text-align: right;
        }
        &:hover {
            color: rgba(var(--primary), 1);
        }
    }
    button {
        background: rgba(var(--accent), 0.25);
        border:none;
        text-align: center;
        vertical-align: middle;
        text-transform: uppercase;
        font-size: 1    rem;
        color:rgba(var(--secondary), 1);
        cursor: pointer;
        transition: background ease-in-out 150ms;
        &:hover {
            background: rgba(var(--accent), 1);
            
        }
    }
    div.buttons {
        padding: 0.5rem 0;
        float: right;
    }
</style> 