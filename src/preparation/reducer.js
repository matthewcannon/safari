import deepFreeze from "deep-freeze";
import { PREPARE_RACE } from "./action";

const initialState = {
    candidates: [
        {
            name: "Turbo Alpaca",
            abilities: ["run", "jump"],
            surfaces: ["grass"],
        },
        {
            name: "Awesome Ibex",
            abilities: ["run", "jump", "anticipate_surface"],
            surfaces: ["grass", "asphalt"],
        },
        {
            name: "Nifty Camel",
            abilities: ["run", "jump", "anticipate_surface"],
            surfaces: ["grass", "asphalt", "sand"],
        },
    ],
};

export default function reduce(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case PREPARE_RACE:
            nextState = { ...state, candidates: [] };
            break;

        default:
            nextState = { ...state };
            break;
    }

    return deepFreeze(nextState);
}
