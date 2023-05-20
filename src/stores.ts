import { writable } from 'svelte/store';
import { localStore } from './localStore';

const initialSheet = {
    id:         1,
    name:       "Example Sheet",
    player:     "Player 1",
    notes:      "Welcome to the Dummy Sheet for little dummies.<div>That's what I'm calling it.</div><div>It doesn't roll, or calculate, or do anything else.</div><div>It has little fields and sections that you can put things in.</div><div>GMs can look at their players' sheets with the little binder tabs, build templates, and distribute them as they wish.</div><div>To get started, just start editing things.</div><div>If you can't edit them, just hit the edit button.</div><div>Pretty much everything is editable. Except the player name. </div><div>That one's special. Not for any reason, really, but I want it to be.</div><div>Everything saves to your browser store as soon as you change it.</div><div>If that's not persistent enough for you, then feel free to export the file. You can import it later.</div><div>Lastly, there's a theme menu, for people who arent fans of #2A2A2A or #FFD58C.</div>",
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
