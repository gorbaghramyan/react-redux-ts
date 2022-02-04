import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ToDoReducer } from "./todo";

export const store = createStore(ToDoReducer, applyMiddleware(thunk));