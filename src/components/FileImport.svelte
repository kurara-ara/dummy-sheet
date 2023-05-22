<script lang="ts">
    // Import store
    import { sheet } from '../stores'

    let saveFile: FileList | undefined;

    function importFile (){
        document.getElementById('importFile').click();
    }
    function storeFile(e){
        var reader = new FileReader();
        reader.onload = function(e) {
            let jsonObj = JSON.parse(e.target.result.toString());
            $sheet = jsonObj;
        }
        reader.readAsText(e.target.files[0]);
    }
</script>

<input id="importFile" type="file" accept="application/json" on:change={e => storeFile(e)} bind:value={saveFile}/>
<button on:click={importFile}>Import</button>

<style lang="scss">
    input[type="file"] {
        display:none;
    }
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