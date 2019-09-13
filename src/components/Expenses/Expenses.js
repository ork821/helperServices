import React from 'react';
import AddInput from "../ExpenseInput/ExpenseInput";

const Expenses = () => {
    return (
        <div className="expenses">
            <h1>Expenses</h1>
            <AddInput idFirstInput="expenseInput"
                      idForm="expenses"
                      idSecondInput="expenseComment"
                      submitForm={console.log('1')}
            />
        </div>
    );
};

export default Expenses;
