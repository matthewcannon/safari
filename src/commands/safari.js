import * as Event from "../events/safari";

export function Regenerate(dispatch) {
    dispatch(Event.Regenerated());
}

export function Start(dispatch) {
    dispatch(Event.Started());
}
