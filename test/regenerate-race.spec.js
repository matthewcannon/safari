import configureStore from "../src/store";
import { regenerate } from "../src/race/action";

describe("regenerate race", () => {
    it("adds 1 to the race generation", () => {
        const store = configureStore();

        const { generation } = store.getState().race;

        store.dispatch(regenerate());

        expect(store.getState().race.generation).toEqual(generation + 1);
    });
});
