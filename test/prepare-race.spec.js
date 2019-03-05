import { createStore } from "redux";
import reduce from "../src/reducer";
import { prepareRace } from "../src/prepare/command";

describe("prepare race", () => {
    it("creates an empty list of candidates", () => {
        const store = createStore(reduce);

        prepareRace(store.dispatch)();

        expect(store.getState().prepare.candidates).toEqual([]);
    });
});
