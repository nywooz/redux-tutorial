import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";

import productsReducer from "./reducers/product-reducer";
import userReducer from "./reducers/user-reducer";

/*
 *combine two reducers and pass to store 
 */
const allReducers = combineReducers({
  products: productsReducer,
  user: userReducer
});


/**
 *
 *  store
 */
export const store = createStore(
  allReducers,
  {
    products: [{ name: "iPhone" }],
    user: "Michael"
  },
  window.devToolsExtension && window.devToolsExtension()
);

console.log(store.getState());

//  Action creator
const updateUserAction = {
  type: "updateUser",
  payload: {
    user: "John"
  }
};

const updateUserAction2 = {
  type: "updateUser",
  payload: {
    user: "Bruce"
  }
};

//  Dispatch that action
store.dispatch(updateUserAction);
store.dispatch(updateUserAction2);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
