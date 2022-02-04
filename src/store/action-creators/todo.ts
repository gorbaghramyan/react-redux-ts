import { Todo } from '../../models/todo';
import { TodoActionTypes } from './../../enums/index';
import { TodoAction } from '../../types/actionTypes';
import { Dispatch } from "redux";
import axios from "axios";
import Store from '../../Store';

export const fetchTodos = () => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
            const payload: Todo[] = response.data.map((todo: any) => new Todo(todo.title, todo.completed));

            dispatch({
                type: TodoActionTypes.UPDATE_TODOS,
                payload,
            });
        } catch (e) {
            dispatch({
                type: TodoActionTypes.TODOS_ERROR,
                payload: 'Failed to load todos',
            });
        }
    }
}

export const addTodo = (todo: Todo) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            const state = Store.getState() as { payload: Todo[] };

            dispatch({
                type: TodoActionTypes.UPDATE_TODOS,
                payload: [todo].concat(state.payload),
            });
        } catch (e: any) {
            dispatch({
                type: TodoActionTypes.TODOS_ERROR,
                payload: e?.message,
            });
        }
    }
}

export const deleteTodo = (id: number) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            // dispatch({
            //     type: TodoActionTypes.DELETE_TODO,
            //     id,
            // });
        } catch (e) {
            dispatch({
                type: TodoActionTypes.TODOS_ERROR,
                payload: 'Failed to delete todo',
            });
        }
    }
}