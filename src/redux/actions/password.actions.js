import {ADD_PASSWORD, DELETE_PASSWORD, VISIBLE_PASSWORD} from "../types/password.types";

export const AddPassword = (name, login, password) => {
    return {
        type: ADD_PASSWORD,
        name,
        login,
        password
    }
}

export const VisiblePassword = (name) => {
    return {
        type: VISIBLE_PASSWORD,
        name,
    }
}

export const DeletePassword = (name) => {
    return {
        type: DELETE_PASSWORD,
        name,
    }
}