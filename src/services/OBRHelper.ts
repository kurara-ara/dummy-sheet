import OBR from "@owlbear-rodeo/sdk";
import type { Player } from "@owlbear-rodeo/sdk";
import { sheet } from '../stores'

import { writable, get } from "svelte/store";

export const isGM = writable(false);
export const PartyStore = writable<Player[]>([]);
export const trackedPlayer = writable<string>();
export const currentPlayerName = writable<string>();
export const currentPlayerId = writable<string>();


export async function init() {
  OBR.onReady(async () => {
    currentPlayerName.set(await OBR.player.getName());
    isGM.set((await OBR.player.getRole()) === "GM");  
    if (get(isGM)) {
      initGM();
    } else {
      initPlayer();
    }
  });
  OBR.player.onChange((player) => {
    currentPlayerName.set(player.name);
    currentPlayerId.set(player.id);
  });
}


async function initGM() {
  OBR.party.onChange((party) => {
    PartyStore.set(party);
    console.log(get(PartyStore));
  });
  PartyStore.set(await OBR.party.getPlayers())
}

async function initPlayer() {
  sheet.subscribe(function(sheet){
    OBR.player.onChange((player) => {
      player.metadata["dummysheet"] = sheet;
    });
    OBR.player.setMetadata({dummysheet: sheet});
  });
}