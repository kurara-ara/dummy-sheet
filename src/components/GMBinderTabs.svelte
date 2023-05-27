<script lang="ts">
import { currentPlayerName, currentPlayerId, PartyStore, viewingPlayerId, ViewingSheet} from '../services/OBRHelper';

function changeViewingSheet(playerId) {
    $viewingPlayerId = playerId;
}
</script>

<ul>
    {#if $viewingPlayerId === $currentPlayerId}
    <li class="active"><button on:click={() => changeViewingSheet($currentPlayerId)}>{$currentPlayerName} &#9734;</button></li>
    {:else}
    <li><button on:click={() => changeViewingSheet($currentPlayerId)}>{$currentPlayerName} &#9734;</button></li>
    {/if}
    {#each $PartyStore as player}
        {#if player.id === $viewingPlayerId}
        <li role="tab" class="active"><button on:click={() => changeViewingSheet(player.id)}>{player.name}</button></li>
        {:else}
        <li role="tab"><button on:click={() => changeViewingSheet(player.id)}>{player.name}</button></li>
        {/if}
    {/each}
</ul>

<style lang="scss">
    ul {
        background: rgba(0,0,0,0.25);
        margin: 0;
        display:flex;
        list-style-type: none;
        li {
            button {
                background-color: transparent;
                border:none;
                border-radius: 0;
                font-size: 1rem;
                box-sizing: border-box;
                display: block;
                height: 100% !important;
                width: 100%;
                padding: 0.5rem 1rem;
                color: inherit;
                cursor:pointer;
            }
            text-decoration: none;
            color: rgba(var(--primary), 0.4);
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