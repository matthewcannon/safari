import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reduce from "./reducer";
import Safari from "./safari";

ReactDOM.render(
    <Provider store={createStore(reduce)}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
