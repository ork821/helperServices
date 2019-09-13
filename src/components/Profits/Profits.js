import React from 'react';
import AddInput from "../AddInput/AddInput";

const Profits = () => {
    const submitForm = (formId, firstInput, secondInput) => {
        let firstInp = document.forms['formId'].elements['firstInput'].value
        let secondInp = document.forms['formId'].elements['secondInput'].value
        document.forms['formId'].elements['firstInput'].value = ''
        document.forms['formId'].elements['secondInput'].value = ''
        document.forms['password_form'].elements['password'].value = ''

    }

    return (
        <div className="profits">
            <AddInput idFirstInput="profitInput"
                      idForm="profits"
                      idSecondInput="profitComment"
                      submitForm={console.log('1')}
            />

        </div>
    );
};

export default Profits;
