<script lang="ts">
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

<button on:click={addSection} on:keydown={addSection}>
 Add Section
</button>

<style lang="scss">
    button {
        background: rgba(var(--accent), 0.25);
        border:none;
        border-radius: 0.5rem;
        text-align: center;
        vertical-align: middle;
        text-transform: uppercase;
        min-height: 4rem;
        font-size: 1    rem;
        line-height: 4rem;
        color:rgba(var(--secondary), 1);
        cursor: pointer;
        transition: background ease-in-out 150ms;
        &:hover {
            background: rgba(var(--accent), 1);
            
        }
    }
</style>