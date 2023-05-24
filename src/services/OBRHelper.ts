import OBR from "@owlbear-rodeo/sdk";
import type { Player } from "@owlbear-rodeo/sdk";

import { writable, get } from "svelte/store";

export const isGM = writable(false);
export const PartyStore = writable<Player[]>([]);
export const trackedPlayer = writable<string>();

export async function init() {
    OBR.onReady(async () => {
      isGM.set((await OBR.player.getRole()) === "GM");  
      if (get(isGM)) {
        initGM();
      } else {
        initPlayer();
      }
    });
  }

  async function initGM() {
    OBR.party.onChange((party) => {
      PartyStore.set(party);
    });
/*
    PartyStore.subscribe((party) => {
      const pmd: { [pId: string]: PlayerMetaData } = {};
      for (const p of party) {
        pmd[p.id] = p.metadata[pluginId("sheetData")];
      }
      PlayerMetaDataMapStore.set(pmd);
    });
  
    PlayerMetaDataMapStore.subscribe((pmd) => {
      const slot = get(CurrentSaveSlot);
      const pId = get(TrackedPlayer);
      PlayerCharacterStore.set(pmd[pId]?.[`slot-${slot}`] ?? defaultPC());
    });
  
    CurrentSaveSlot.subscribe((slot) => {
      const pmd = get(PlayerMetaDataMapStore);
      const pId = get(TrackedPlayer);
      PlayerCharacterStore.set(pmd[pId]?.[`slot-${slot}`] ?? defaultPC());
    });
  
    TrackedPlayer.subscribe((pId) => {
      const pmd = get(PlayerMetaDataMapStore);
      const slot = get(CurrentSaveSlot);
      PlayerCharacterStore.set(pmd[pId]?.[`slot-${slot}`] ?? defaultPC());
    });
  
    PartyStore.set(await OBR.party.getPlayers());
    */
  }
  async function initPlayer() {
    /*
    CurrentSaveSlot.set(await getSaveSlot());
  
    PlayerMetaDataStore.set({
      "slot-1": (await loadPlayerFromLocalStorage(1)) ?? defaultPC(),
      "slot-2": (await loadPlayerFromLocalStorage(2)) ?? defaultPC(),
      "slot-3": (await loadPlayerFromLocalStorage(3)) ?? defaultPC(),
      "slot-4": (await loadPlayerFromLocalStorage(4)) ?? defaultPC(),
      "slot-5": (await loadPlayerFromLocalStorage(5)) ?? defaultPC(),
    });
  
    PlayerCharacterStore.subscribe(
      debounce((pc) => {
        const pmd = get(PlayerMetaDataStore);
        const slot = get(CurrentSaveSlot);
        savePlayerToLocalStorage(pc, slot);
        pmd[`slot-${slot}`] = pc;
        PlayerMetaDataStore.set(pmd);
      }, 1000)
    );
  
    CurrentSaveSlot.subscribe((slot) => {
      saveSaveSlot(slot);
      const pmd = get(PlayerMetaDataStore);
      PlayerCharacterStore.set(pmd[`slot-${slot}`]);
    });
  
    PlayerMetaDataStore.subscribe((pmd) => {
      OBR.player.setMetadata({
        [pluginId("sheetData")]: pmd,
      });
    });
    */
  }