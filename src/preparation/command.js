import * as Action from "./action";

const prepareRace = dispatch => () => dispatch(Action.prepareRace());

const scheduleRace = dispatch => () => dispatch(Action.scheduleRace());

// export function prepareRace(dispatch) {
// dispatch(Action.prepareRace());

// Discover candidates.
// Candidate information will be fetched from the server, so these commands will be asynchronous.
// The "thunk" middleware will be required.
// }

// export function scheduleRace(dispatch) {
//     dispatch(Action.scheduleRace());

// Enrol each candidate as a runner in the race.
// These commands will effectively cross bounded contexts, affecting the the "race" aggregate root.
// }

export { prepareRace, scheduleRace };
