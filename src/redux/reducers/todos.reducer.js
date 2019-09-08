import {ADD_TODO} from "../types/todo.types";

export const todos = (state = [], action) => {
    if (action.type === ADD_TODO) {
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }
        ]
    } else {
        return state
    }
}