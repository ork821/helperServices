import {ADD_EXPENSE} from "../types/expense.types";

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
        default:
            return state
    }
}