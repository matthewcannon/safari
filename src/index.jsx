import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import Safari from "./safari";

const store = configureStore();

render(
    <Provider store={store}>
        <Safari />
    </Provider>,
    document.querySelector("#container"),
);
