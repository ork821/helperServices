import {ADD_PASSWORD} from "../types/password.types";

export const AddPassword = (name, login, password) => {
    return {
        type: ADD_PASSWORD,
        name,
        login,
        password
    }
}