import { combineReducers } from "redux";
import admin from "./admin/reducer";
import game from "./game/reducer";

export default combineReducers({ admin, game });
