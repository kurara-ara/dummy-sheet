<script lang="ts">
    import { saveAs } from 'file-saver';

    import { sheet } from '../stores'


    function exportFile (){
        let dl = JSON.stringify($sheet);
        let filename = "DummySheet-" + $sheet.name + "-" +  Date.now() + ".json";
        var blob = new Blob([dl], {type: "application/json"});
        saveAs(blob, filename);
    }
</script>

<button on:click={exportFile}>Export</button>

<style lang="scss">
    button {
        float: right;
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