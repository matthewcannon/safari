import React from "react";
import { Provider } from "react-redux";
import configureStore from "../src/store";
import Race from "../src/race";

describe("render race", () => {
    test("renders the generation", () => {
        const race = mount(<Race store={configureStore()} />);
        const generation = 0;
        expect(race.text()).toEqual(`generation:${generation}`);
    });

    test("renders a lane for each runner", () => {});
});
