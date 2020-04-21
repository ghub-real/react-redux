import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import counterReducer from "./reducer";
import { createStore } from "redux";

import App from "./App";

const store = createStore(counterReducer);

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
