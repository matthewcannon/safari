import deepFreeze from "deep-freeze";
import { PREPARE_RACE } from "./action";

const initialState = {
    candidates: [{ name: "Super Camel" }, { name: "Turbo Alpaca" }, { name: "Awesome Ibex" }],
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
