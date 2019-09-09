import {ADD_TODO, CHANGE_COMPLETE} from "../types/todo.types";

let nextId = 0

export const AddTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextId++,
        text,
    }
}

export const ChangeComplete = (id) => {
    return {
        type: CHANGE_COMPLETE,
        id,
    }
}
