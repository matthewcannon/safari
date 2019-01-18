import { createStore } from "redux";
import reduce from "../src/reducer";
import { regenerate } from "../src/race/action";

describe("regenerate", () => {
    test("adds 1 to the race generation", () => {
        const store = createStore(reduce);

        const { generation } = store.getState().race;

        store.dispatch(regenerate());

        expect(store.getState().race.generation).toEqual(generation + 1);
    });
});
