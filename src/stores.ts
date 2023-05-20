import { writable } from 'svelte/store';
import { localStore } from './localStore';

const initialSheet = {
    id:         1,
    name:       "Example Sheet",
    player:     "Player 1",
    notes:      "",
    sections:  [
        {
            id:     1,
            name:   "Base Stats",
            stats:   [
                {
                    id:     1,
                    name:   "Name",
                    value:  "Elveranha"
                },
                {
                    id:     2,
                    name:   "Class",
                    value:  "Mage"
                },
                {
                    id:     3,
                    name:   "Level",
                    value:  "3"
                },
                {
                    id:     4,
                    name:   "Experience",
                    value:  "5,000"
                },
                {
                    id:     5,
                    name:   "Hit Points",
                    value:  "8/8"
                },
                {
                    id:     6,
                    name:   "Armour Class",
                    value:  "9"
                }  
                
            ]
        },
        {
            id:     2,
            name:   "Attributes",
            stats:   [
                {
                    id:     1,
                    name:   "Strength",
                    value:  "7 (-1)"
                },
                {
                    id:     2,
                    name:   "Intelligence",
                    value:  "11 (0)"
                },
                {
                    id:     3,
                    name:   "Wisdom",
                    value:  "5 (-2)"
                },
                {
                    id:     4,
                    name:   "Dexterity",
                    value:  "10 (0)"
                },
                {
                    id:     5,
                    name:   "Constitution",
                    value:  "5 (-2)"
                },
                {
                    id:     6,
                    name:   "Charisma",
                    value:  "14 (+1)"
                },
            ]
        },
        {
            id:     3,
            name:   "Saves",
            stats:   [
                {
                    id:     1,
                    name:   "Death",
                    value:  "13"
                },
                {
                    id:     2,
                    name:   "Wands",
                    value:  "14"
                },
                {
                    id:     3,
                    name:   "Paralysis",
                    value:  "13"
                },
                {
                    id:     4,
                    name:   "Breath",
                    value:  "16"
                },
                {
                    id:     5,
                    name:   "Spells",
                    value:  "15"
                }
            ]
        },
    ]
};
const initialTheme = {
    primary:        "255,255,255",
    secondary:      "42,42,42",
    accent:         "255,213,140",
    textShadow:     "1px 1px 2px #000000"
};

export const editing = writable(false);
export const sheet = localStore('dummy-sheet', initialSheet);
export const theme = localStore('dummy-sheet-theme', initialTheme);
