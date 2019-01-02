import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Store from "./store";
import Safari from "./safari";

ReactDOM.render(
    <Provider store={createStore(Store)}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
