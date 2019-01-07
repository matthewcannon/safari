import { createStore } from "redux";
import reduce from "../src/reducer";
import { regenerate } from "../src/command";

describe("Regenerate", () => {
    test("Should add 1 to the generation", () => {
        const store = createStore(reduce);

        const { generation } = store.getState();

        regenerate(store.dispatch);

        expect(store.getState().generation).toEqual(generation + 1);
    });
});
