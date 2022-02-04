import { Todo } from '../models/todo';
import { TodoActionTypes } from '../enums/index';

interface FetchTodosAction {
    type: TodoActionTypes.FETCH_TODOS;
};

export interface UpdateTodosAction {
    type: TodoActionTypes.UPDATE_TODOS;
    payload: Todo[];
};

interface FetchTodosErrorAction {
    type: TodoActionTypes.TODOS_ERROR;
    payload: string;
};

export type TodoAction = FetchTodosAction | UpdateTodosAction | FetchTodosErrorAction | UpdateTodosAction;