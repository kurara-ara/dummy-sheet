import OBR from "@owlbear-rodeo/sdk";
import type { Player } from "@owlbear-rodeo/sdk";
import { sheet } from '../stores'

import { writable, get } from "svelte/store";

let initViewingSheet:any = {
  id: 0,
  name: "",
  notes: "",
  sections: [
    {
      id:0,
      name: "",
      stats: [
        {id: 0, name: "", value: ""}
      ]
    }
  ]
};

export const isGM = writable(false);
export const PartyStore = writable<Player[]>([]);
export const currentPlayerName = writable<string>("");
export const currentPlayerId = writable<string>("");
export const viewingPlayerId = writable<string>("");
export const ViewingSheet = writable(initViewingSheet);


export async function init() {
  OBR.onReady(async () => {
    PartyStore.set(await OBR.party.getPlayers());
    currentPlayerName.set(await OBR.player.getName());
    currentPlayerId.set(await OBR.player.getId());
    viewingPlayerId.set(await OBR.player.getId());
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

// Initialize GM
async function initGM() {
  OBR.party.onChange((party) => {
    PartyStore.set(party);
  });

  PartyStore.subscribe((party) => {
    const vId = get(viewingPlayerId);
    for (const p of party){
      if (p.id === vId) {
        ViewingSheet.set(p.metadata.dummysheet)
      }
    }
  });

  viewingPlayerId.subscribe((vId) => {
    const cId = get(currentPlayerId);
    const ps = get(PartyStore);
    const s = get(sheet);
    if (vId === cId){
      ViewingSheet.set(s);
    } else {
      const vs = ps.find(x => x.id === vId).metadata.dummysheet;
      ViewingSheet.set(vs);
    }
  });
  
}

async function initPlayer() {
  sheet.subscribe(function(sheet){
    OBR.player.onChange((player) => {
      const vId = get(viewingPlayerId)
      player.metadata["dummysheet"] = sheet;
    });
    OBR.player.setMetadata({dummysheet: sheet});
  });
}