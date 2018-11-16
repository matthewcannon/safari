import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Safari from "./components/safari";
import Store from "./store/read-models.js";

let store = createStore(Store);

ReactDOM.render(
    <Provider store={createStore(Store)}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
