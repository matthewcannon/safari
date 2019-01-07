import { createStore } from "redux";
import reduce from "../lib/reducer";
import { regenerate } from "../lib/command";

describe("Regenerate", () => {
    test("Should increment the generation", () => {
        const store = createStore(reduce);

        regenerate(store.dispatch);

        expect(store.getState().generation).toEqual(1);
    });
});
