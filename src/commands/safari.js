import * as Event from "../events/safari";

export function Regenerate(dispatch) {
    dispatch(Event.generate());
}

export function Start(dispatch) {
    dispatch(Event.start());
}
