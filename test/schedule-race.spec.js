import { createStore } from "redux";
import reduce from "../src/reducer";
import { scheduleRace } from "../src/preparation/command";

describe("schedule race", () => {
    xtest("creates an empty list of runners", () => {
        const store = createStore(reduce);

        scheduleRace(store.dispatch);

        expect(store.getState().race.runners).toEqual([]);
    });

    xtest("enrols each candidate as a runner", () => {});
});
