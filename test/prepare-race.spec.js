import configureStore from "../src/store";
import { prepareRace } from "../src/prepare/command";

describe("prepare race", () => {
    it("creates an empty list of candidates", () => {
        const store = configureStore();

        prepareRace(store.dispatch)();

        expect(store.getState().prepare.candidates).toEqual([]);
    });
});
