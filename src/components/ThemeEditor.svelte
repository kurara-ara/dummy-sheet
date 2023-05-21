<script lang="ts">
    // Import stores
    import { theme } from '../stores'
    import { editing } from '../stores';

    $:shadowChecked = ($theme.textShadow === "1px 1px 2px #000000" ? true : false);
    $:primaryHex = rgbToHex($theme.primary);
    $:secondaryHex = rgbToHex($theme.secondary);
    $:accentHex = rgbToHex($theme.accent);
    
    function updateColor(ev) {
        const color = ev.target.value;
        const name = ev.target.name;
        let rgb = parseInt(color.slice(1), 16);
        let r = (rgb & 0xff0000) >> 16;
        let g = (rgb & 0x00ff00) >> 8;
	    let b = (rgb & 0x0000ff) >> 0;
        $theme[name] = r + "," + g + "," + b;
    }
    
    function rgbToHex(rgb) {
        var rgb = rgb.split( ',' );
        let hex = "#";
        rgb.forEach(function(c){
            c = parseInt(c);
            c = c.toString(16)
            c = c.length === 1 ? '0' + c : c
            hex = hex + c.toString();
        });
        return hex;
    }

    function updateShadow() {
        if (!shadowChecked) {
            $theme.textShadow = "1px 1px 2px #000000";
        } else {
            $theme.textShadow = "none"
        }
    }

     
</script>
{#if $editing}
<input type="color" name="primary" value={primaryHex} on:input={updateColor}/>
<input type="color" name="secondary" value={secondaryHex} on:input={updateColor}/>
<input type="color" name="accent" value={accentHex} on:input={updateColor}/>
<input type="checkbox" name="shadow" bind:checked={shadowChecked} on:input={updateShadow}/>
{/if}

<style lang="scss">
    input[type="color"] {
        border: none;
        background: none;
        height:2rem;
        width: 2rem;
        cursor:pointer;
    }
    input[type="checkbox"] {
        border: none;
        background: var(--secondary);
        height:1.5rem;
        width: 1.5rem;
        cursor:pointer;
        &:checked {
            background:var(--accent);
        }
    }
    

</style>