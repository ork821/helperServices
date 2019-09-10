import {ADD_PASSWORD} from "../types/password.types";

export const passwords = (state = [], action) => {
    switch (action.type) {
        case ADD_PASSWORD:
            return [
                ...state,
                {
                    name: action.name,
                    login: action.login,
                    password: action.password
                }
            ]
        default:
            return state
    }
}