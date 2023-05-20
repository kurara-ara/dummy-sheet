import { writable } from 'svelte/store'
import { localStore } from './localStore'

const initialSheet = {
    id:         1,
    name:       "New Sheet",
    player:     "New Player",
    sections:  [
        {
            id:     1,
            name:   "New Section",
            stats:   [
                {
                    id:     1,
                    name:   "New Field",
                    value:  "-"
                },
                {
                    id:     2,
                    name:   "New Field",
                    value:  "-"
                }
            ]
        },
        {
            id:     2,
            name:   "New Section",
            stats:   [
                {
                    id:     1,
                    name:   "New Field",
                    value:  "-"
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
}

export const editing = writable(false);
export const sheet = localStore('dummy-sheet', initialSheet)
export const theme = localStore('dummy-sheet-theme', initialTheme)
