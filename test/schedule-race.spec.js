import { createStore } from "redux";
import reduce from "../src/reducer";
import { scheduleRace } from "../src/prepare/command";

describe("schedule race", () => {
    xit("enrols each candidate as a runner", () => {
        const store = createStore(reduce);

        scheduleRace(store.dispatch);

        expect(store.getState().race.runners).toEqual([]);
    });
});
