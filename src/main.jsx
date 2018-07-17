import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Safari from "./components/safari";

import Simulation from "./reducers/simulation";
let store = createStore(Simulation);

ReactDOM.render(
    <Provider store={store}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
