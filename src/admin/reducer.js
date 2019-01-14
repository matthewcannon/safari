import deepFreeze from "deep-freeze";
import { CREATE_GAME } from "./action";

const initialState = {
    players: [{ name: "Super Camel" }, { name: "Turbo Alpaca" }, { name: "Awesome Ibex" }],
};

export default function reduce(state = initialState, action) {
    let nextState;

    switch (action.type) {
        case CREATE_GAME:
            nextState = { ...state, players: [] };
            break;

        default:
            nextState = state;
            break;
    }

    return deepFreeze(nextState);
}
