import { createStore } from "redux";
import reduce from "../src/reducer";
import { regenerate } from "../src/action";

describe("Regenerate", () => {
    test("Adds 1 to the generation", () => {
        const store = createStore(reduce);

        const { generation } = store.getState();

        store.dispatch(regenerate());

        expect(store.getState().generation).toEqual(generation + 1);
    });
});
