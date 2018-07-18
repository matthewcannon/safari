import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Safari from "./components/safari";

import Store from "./read-models/store";
let store = createStore(Store);

ReactDOM.render(
    <Provider store={store}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
