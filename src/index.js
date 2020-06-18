import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import "semantic-ui-css/semantic.min.css";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./redux/index";

import App from "./App";
import rootSaga from "./sagas/sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
