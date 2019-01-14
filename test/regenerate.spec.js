import { createStore } from "redux";
import reduce from "../src/reducer";
import { regenerate } from "../src/game/action";

describe("Regenerate", () => {
    test("Adds 1 to the game generation", () => {
        const store = createStore(reduce);

        const { generation } = store.getState().game;

        store.dispatch(regenerate());

        expect(store.getState().game.generation).toEqual(generation + 1);
    });
});
