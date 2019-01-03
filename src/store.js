import deepFreeze from "deep-freeze";
import InitialState from "./initialState";
import * as Action from "./action";

export default function Store(state = InitialState, action) {
    let nextState;

    switch (action.type) {
        case Action.REGENERATE:
            nextState = { ...state, generation: state.generation + 1 };
            break;

        case Action.START:
            nextState = { ...state, generation: 0 };
            break;

        default:
            nextState = state;
            break;
    }

    return deepFreeze(nextState);
}
