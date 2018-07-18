import * as Event from "../events/safari";
import InitialState from "./initialState";

function Store(state = InitialState, event) {
    let nextState;

    switch (event.type) {
        case Event.GENERATE:
            nextState = Object.assign({}, state, {
                generation: state.generation + 1,
            });
            break;

        case Event.START:
            nextState = Object.assign({}, state, {
                generation: 0,
            });
            break;

        default:
            nextState = Object.assign({}, state);
    }

    return Object.freeze(nextState);
}

export default Store;
