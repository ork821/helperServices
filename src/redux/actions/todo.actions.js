import {ADD_TODO} from "../types/todo.types";

let nextId = 0

export const AddTodo = (text) => {
    return {
        type: ADD_TODO,
        id: nextId++,
        text,
    }
}
