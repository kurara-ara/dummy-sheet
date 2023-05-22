import { writable } from 'svelte/store';
import { localStore } from './localStore';

const initialSheet = {
    id: 1,
    name: "Example Sheet",
    notes: "Welcome to the DummySheet for little dummies.\nIt's a dummy-simple sheet for storing character data. If you're constantly changing systems, and you don't have time to wait for a nice dev to implement your character sheet, then DummySheet is for you. Open it up, edit your sheet, and get to playing.\n\n\n\n___________________________________\nTo use:\n• Edit the righthand columns by clicking on them.\n• The EDIT button lets you edit the left columns, section titles, and just about everything else.\n• You can also change the theme by clicking on the colour boxes, if you want something cheerier.\n• EXPORT your character to a convenient JSON file...\n• ... and you can IMPORT it back again.\n• Have a fun time.",
    sections: [
      {
        id: 1,
        name: "Character",
        stats: [
          {
            id: 1,
            name: "Name",
            value: "Elveranha"
          },
          {
            id: 2,
            name: "Class",
            value: "Mage"
          },
          {
            id: 3,
            name: "Level",
            value: "3"
          },
          {
            id: 4,
            name: "Experience",
            value: "5,000"
          },
          {
            id: 5,
            name: "Hit Points",
            value: "8/8"
          },
          {
            id: 6,
            name: "Armour Class",
            value: "9"
          }
        ]
      },
      {
        id: 2,
        name: "Attributes",
        stats: [
          {
            id: 1,
            name: "Strength",
            value: "7 (-1)"
          },
          {
            id: 2,
            name: "Intelligence",
            value: "11 (0)"
          },
          {
            id: 3,
            name: "Wisdom",
            value: "5 (-2)"
          },
          {
            id: 4,
            name: "Dexterity",
            value: "10 (0)"
          },
          {
            id: 5,
            name: "Constitution",
            value: "5 (-2)"
          },
          {
            id: 6,
            name: "Charisma",
            value: "14 (+1)"
          }
        ]
      },
      {
        id: 3,
        name: "Saves",
        stats: [
          {
            id: 1,
            name: "Death",
            value: "13"
          },
          {
            id: 2,
            name: "Wands",
            value: "14"
          },
          {
            id: 3,
            name: "Paralysis",
            value: "13"
          },
          {
            id: 4,
            name: "Breath",
            value: "16"
          },
          {
            id: 5,
            name: "Spells",
            value: "15"
          }
        ]
      },
      {
        id: 4,
        name: "Weapons",
        stats: [
          {
            id: 1,
            name: "Mace",
            value: "1d6+1"
          },
          {
            id: 2,
            name: "Sword of a Thousand Woes",
            value: "1d12+2"
          }
        ]
      },
      {
        id: 5,
        name: "Spell List",
        stats: [
          {
            id: 1,
            name: "Transcription of Transient Trust",
            value: "P"
          },
          {
            id: 2,
            name: "Temporal Conflagaration",
            value: "-"
          }
        ]
      },
      {
        id: 6,
        name: "Inventory",
        stats: [
          {
            id: 1,
            name: "A book",
            value: "1lb"
          },
          {
            id: 2,
            name: "A bag of rocks",
            value: "10lb"
          }
        ]
      }
    ]
  }
const initialTheme = {
    primary:        "255,255,255",
    secondary:      "42,42,42",
    accent:         "255,213,140",
    textShadow:     "1px 1px 2px #000000"
};

export const editing = writable(false);
export const sheet = localStore('dummy-sheet', initialSheet);
export const theme = localStore('dummy-sheet-theme', initialTheme);
