import * as Actions from "../actions/safari";
import InitialState from "./initialState";

function Simulation(state = InitialState, action) {
    let nextState;

    switch (action.type) {
        case Actions.GENERATE:
            nextState = Object.assign({}, state, {
                generation: state.generation + 1,
            });
            break;

        case Actions.START:
            nextState = Object.assign({}, state, {
                generation: 0,
            });
            break;

        default:
            nextState = Object.assign({}, state);
    }

    return Object.freeze(nextState);
}

export default Simulation;
