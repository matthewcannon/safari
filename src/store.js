import { createStore } from "redux";
import reduce from "./reducer";

export default function configureStore() {
    return createStore(reduce);
}
