import * as Event from "../events/safari";
import InitialState from "./initialState";
import deepFreeze from "deep-freeze";

export default function Store(state = InitialState, event) {
    let nextState;

    switch (event.type) {
        case Event.REGENERATED:
            nextState = { ...state, generation: state.generation + 1 };
            break;

        case Event.STARTED:
            nextState = { ...state, generation: 0 };
            break;

        default:
            nextState = state;
            break;
    }

    return deepFreeze(nextState);
}
