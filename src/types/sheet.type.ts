export type DummySheet = {
    id: number;
    name: string;
    notes: string;
    sections: Array<DummySheetSection>;
}

export type DummySheetSection = {
    id: number;
    name: string;
    stats: Array<DummySheetStats>;
}

export type DummySheetStats = {
    id: number;
    name: string;
    value: string;
}