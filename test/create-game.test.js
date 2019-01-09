import { createStore } from "redux";
import reduce from "../src/reducer";
import { createGame } from "../src/command";

describe("Create game", () => {
    test("Should create an empty list of players", () => {
        const store = createStore(reduce);

        createGame(store.dispatch);

        expect(store.getState().players).toEqual([]);
    });
});
