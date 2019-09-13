import React from 'react';
import AddInput from "../ExpenseInput/ExpenseInput";

const Profits = () => {
    const idFirstInput = "profitInput"
    const idForm = "profits"
    const idSecondInput = "profitComment"


    return (
        <div className="profits">
            <h1>Profits</h1>
            <AddInput idFirstInput={idFirstInput}
                      idForm={idForm}
                      idSecondInput={idSecondInput}
            />

        </div>
    );
};


export default Profits;
