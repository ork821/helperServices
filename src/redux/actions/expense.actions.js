import {ADD_EXPENSE} from "../types/expense.types";
let id = 0

export const AddExpense = (money, comment) => {
    return {
        type: ADD_EXPENSE,
        id: id++,
        money,
        comment
    }
}

