import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ToDoReducer } from "./store/reducers/todo";

const Store = createStore(ToDoReducer, applyMiddleware(thunk));

export default Store;