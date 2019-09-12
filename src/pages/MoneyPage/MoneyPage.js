import React from 'react';

const MoneyPage = () => {
    return (
        <div>
            <Expenses /> {/*затраты*/}
            <Profits /> {/*доход*/}
            <OtherMoneyPayments /> {/*разное*/}
        </div>
    );
};

export default MoneyPage;
