import {ADD_TODO, CHANGE_COMPLETE} from "../types/todo.types";
import {completeTodo} from "../../todo.utils";

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

        case CHANGE_COMPLETE: //берет айди инпута, находит в стейте и меняет состояние
            state.map(elem => {
                if (elem.id == action.id) {
                    elem.completed = !elem.completed
                    return elem
                } else {
                    return elem
                }
            })


        default:
            return state
    }

}