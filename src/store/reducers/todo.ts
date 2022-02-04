import { TodoActionTypes } from '../../enums/index';
import { TodoAction } from '../../types/actionTypes';
import { Todo } from '../../models/todo';

export const ToDoReducer = (state = [] as Todo[], action: TodoAction) => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODOS:
            return { ...state };
        case TodoActionTypes.UPDATE_TODOS:
            return { ...state, payload: action.payload };
        case TodoActionTypes.TODOS_ERROR:
            return { ...state, payload: action.payload };
        default:
            return { ...state };
    }
}