import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

export const store = configureStore();

const rootElement = document.getElementById("root");

render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

export default store;
