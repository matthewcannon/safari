import React from "react";
import configureStore from "../src/store";
import Race from "../src/race";

describe("render race", () => {
    test("renders the generation", () => {
        const race = mount(<Race store={configureStore()} />);
        expect(race.text()).toEqual("generation:0");
    });

    test("renders a lane for each runner", () => {});
});
