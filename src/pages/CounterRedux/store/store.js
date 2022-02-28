import { combineReducers, createStore } from "redux";
import { counter } from "./counter";
import { toggle } from "./toggle";

const reducer = combineReducers({ counter, toggle });

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
