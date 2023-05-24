<script lang="ts">
    import { currentPlayerName, currentPlayerId, PartyStore } from '../services/OBRHelper';

    let activeTab = "active";
</script>

<ul>
    <li class="{activeTab}">{$currentPlayerName} &#9734;</li>
    {#each $PartyStore as player}
    <li>{player.name}</li>
    {/each}
</ul>

<style lang="scss">
    ul {
        background: rgba(0,0,0,0.25);
        margin: 0;
        display:flex;
        list-style-type: none;
        li {
            cursor:pointer;
            padding: 0.5rem 1rem;
            text-decoration: none;
            color: rgba(var(--primary), 0.5);
            &:hover {
                background: rgba(var(--secondary), 0.5);
                color: rgba(var(--primary), 0.75);
                text-shadow: var(--shadow);
            }
            &.active {
                color: rgba(var(--accent), 1);
                background: rgb(var(--secondary));
                text-shadow: var(--shadow);
            }
        }
    }

</style>