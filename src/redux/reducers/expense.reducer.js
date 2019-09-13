import {ADD_EXPENSE, DELETE_EXPENSE} from "../types/expense.types";

export const expenses = (state = [], action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return [
                ...state,
                {
                    id: action.id,
                    money: action.money,
                    comment: action.comment
                }
            ]
        case DELETE_EXPENSE:
            return state.filter(
                exp => exp.id !== action.id)
        default:
            return state
    }
}