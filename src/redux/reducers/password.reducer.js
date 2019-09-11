import {ADD_PASSWORD, DELETE_PASSWORD, VISIBLE_PASSWORD} from "../types/password.types";

export const passwords = (state = [], action) => {
    switch (action.type) {
        case ADD_PASSWORD:
            return [
                ...state,
                {
                    name: action.name,
                    login: action.login,
                    password: action.password,
                    hidden: true
                }
            ]

        case VISIBLE_PASSWORD:
            return state.map(pass => pass.name === action.name ? {...pass, hidden: !pass.hidden} : pass)

        case DELETE_PASSWORD:
            return state.filter(pass => pass.name !== action.name)

        default:
            return state
    }
}