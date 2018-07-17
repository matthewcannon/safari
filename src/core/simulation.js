import * as Actions from "../actions/safari";

export function Regenerate(dispatch) {
    dispatch(Actions.generate());
}

export function Start(dispatch) {
    dispatch(Actions.start());
}
