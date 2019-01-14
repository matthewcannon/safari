import { createStore } from "redux";
import reduce from "../src/admin/reducer";
import { createGame } from "../src/admin/command";

describe("Create game", () => {
    test("Creates an empty player list", () => {
        const store = createStore(reduce);

        createGame(store.dispatch);

        expect(store.getState().players).toEqual([]);
    });
});
