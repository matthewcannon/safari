import deepFreeze from "deep-freeze";
import * as Action from "./action";

const initialState = {
    generation: 0,
};

export default function reduce(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case Action.REGENERATE:
            nextState = { ...state, generation: state.generation + 1 };
            break;

        case Action.CREATE_GAME:
            nextState = { ...state, players: [] };
            break;

        default:
            nextState = state;
            break;
    }

    return deepFreeze(nextState);
}
