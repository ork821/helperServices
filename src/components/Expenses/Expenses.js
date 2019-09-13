import React from 'react';
import ExpenseInput from "../ExpenseInput/ExpenseInput";
import ExpenseList from "../ExpenseList/ExpenseList";

const Expenses = () => {
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <ExpenseInput idFirstInput="expenseInput"
                      idForm="expenses"
                      idSecondInput="expenseComment"
                      submitForm={console.log('1')}
            />
            <ExpenseList />
        </div>
    );
};

export default Expenses;
