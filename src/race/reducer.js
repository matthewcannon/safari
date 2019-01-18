import deepFreeze from "deep-freeze";
import { REGENERATE } from "./action";

const initialState = {
    generation: 0,
};

export default function reduce(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case REGENERATE:
            nextState = { ...state, generation: state.generation + 1 };
            break;

        default:
            nextState = { ...state };
            break;
    }

    return deepFreeze(nextState);
}
