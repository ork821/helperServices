import React from 'react';
import Expenses from "../../components/Expenses/Expenses";
import Profits from "../../components/Profits/Profits";
import './moneypage.styles.css'

const MoneyPage = () => {
    return (
        <div className='money'>
            <Expenses/> {/*затраты*/}
            <Profits/> {/*доход*/}
        </div>
    );
};

export default MoneyPage;
