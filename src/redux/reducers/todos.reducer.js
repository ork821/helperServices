import {ADD_TODO, CHANGE_COMPLETE, DELETE_TODO} from "../types/todo.types";

export const todos = (state = [], action) => {
    switch (action.type) {

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]

        case CHANGE_COMPLETE:
            return state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            )

        case DELETE_TODO:
            return state.filter(todo =>
                todo.id !== action.id
            )

        default:
            return state
    }
}
