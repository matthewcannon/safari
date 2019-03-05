import { combineReducers } from "redux";
import prepare from "./prepare/reducer";
import race from "./race/reducer";

export default combineReducers({ prepare, race });
