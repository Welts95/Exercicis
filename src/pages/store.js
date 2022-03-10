import { createStore, combineReducers } from "redux";
import todoReducer from "./ToDoList/reducers/todoReducer";
import { tresEnRatlla } from "./TresEnRatlla/reducers/tresEnRatllaReducer";

const appReducer = combineReducers({
  todoReducer: todoReducer,
  tresEnRatlla: tresEnRatlla,
});

export default createStore(appReducer);
