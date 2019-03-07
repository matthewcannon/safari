import configureStore from "../src/store";
import { scheduleRace } from "../src/prepare/command";

describe("schedule race", () => {
    xit("enrols each candidate as a runner", () => {
        const store = configureStore();

        scheduleRace(store.dispatch);

        expect(store.getState().race.runners).toEqual([]);
    });
});
