import { createStore } from "redux";
import reduce from "../src/reducer";
import { prepareRace } from "../src/preparation/command";

describe("prepare race", () => {
    test("creates an empty list of candidates", () => {
        const store = createStore(reduce);

        prepareRace(store.dispatch);

        expect(store.getState().preparation.candidates).toEqual([]);
    });
});
