<script lang="ts">
    import { editing } from "../stores";
    
    $: newSectionId = sections.length > 0 ? Math.max(...sections.map(t => t.id)) + 1 : 1

    function addSection(){
        sections = [...sections, 
        { 
            id: newSectionId, 
            name: "New Section", 
            stats: [
                {
                    id: 1,
                    name: "New Field",
                    value: "-"
                }
            ]
        }]
    }

    export let sections;
</script>

{#if $editing}

<button on:click={addSection} on:keydown={addSection}>
 Add Section
</button>
{/if}

<style lang="scss">
    button {
        float: right;
        margin: 0 1rem; 
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