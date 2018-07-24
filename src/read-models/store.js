import * as Event from "../events/safari";
import InitialState from "./initialState";
import deepFreeze from "deep-freeze";

export default function Store(state = InitialState, event) {
    let nextState;

    switch (event.type) {
        //
        // Shouldn't these be past tense?
        //
        // Then it makes sense for these handlers to be registering for events that have occured (perhaps as a result of
        // commands being handled elsewhere), with the new state representing the eventually consistent model that is to
        // be applied here to the read model.
        //
        case Event.REGENERATED:
            nextState = Object.assign({}, state, {
                generation: state.generation + 1,
            });
            break;

        case Event.STARTED:
            nextState = Object.assign({}, state, {
                generation: 0,
            });
            break;

        default:
            nextState = state;
            break;
    }

    return deepFreeze(nextState);
}
