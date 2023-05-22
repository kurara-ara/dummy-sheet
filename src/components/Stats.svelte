<script lang="ts">
    // Import stores
    import { editing } from "../stores";

    // Import components
    import RemoveStat from "./RemoveStat.svelte";
    import AddStat from "./AddStat.svelte"

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
        <td contenteditable="true" bind:innerText={stat.name}></td>
        {:else}
        <td>{stat.name}</td>
        {/if}
        <td contenteditable="true" bind:innerText={stat.value}></td>

        {#if $editing}
        <td style="width:0.5rem;"><RemoveStat bind:stat={stat} on:removeStat={e => removeStat(e.detail)}/></td>
        {/if}
    </tr>
    {/each}
</table>
{#if $editing}
<AddStat on:addStat={addStat}/>
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
        white-space: pre-wrap;
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
</style> 