import React from "react";
import configureStore from "../src/store";
import Candidates from "../src/prepare/candidates";

describe("render candidates", () => {
    it("renders multiple candidates", () => {
        const candidates = mount(<Candidates store={configureStore()} />);
        expect(candidates.children().children().length).toBe(3);
    });
});
