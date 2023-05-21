<script lang="ts">

    export let notes;
</script>

<div>
    <h2>Notes</h2>
    <pre bind:innerHTML={notes} contenteditable="true"></pre>
</div>

<style>
    pre {
        border-radius: 0;
        font-family: "Jost", sans-serif;
        color: rgba(var(--primary));
        text-shadow: var(--shadow);
        white-space: pre-wrap;
        word-wrap: normal;
        overflow-y: scroll;
        max-height: 15rem;
    }
    div {
        margin-bottom:2rem;
        padding: 1rem 0.5rem;
        border-width: 0.15rem;
        border-style: solid;
        border-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgb(var(--accent)), rgba(0, 0, 0, 0)) 1 100%;
        border-right: none;
    }
    h2 {
        text-shadow: var(--shadow);
        color: rgb(var(--accent));
        margin-top:0;
        margin-bottom:0;
    }
</style>