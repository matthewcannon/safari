import { combineReducers } from "redux";
import preparation from "./preparation/reducer";
import race from "./race/reducer";

export default combineReducers({ preparation, race });
