import React from 'react';
import AddInput from "../AddInput/AddInput";

const Expenses = () => {
    return (
        <div className="expenses">
            <AddInput idFirstInput="expenseInput"
                      idForm="expenses"
                      idSecondInput="expenseComment"
                      submitForm={console.log('1')}
            />
        </div>
    );
};

export default Expenses;
