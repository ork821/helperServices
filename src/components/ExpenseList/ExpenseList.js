import React from 'react';
import {connect} from "react-redux";

const ExpenseList = ({expenses}) => {
    return (
        <div>
            {
                expenses.map((expense, idx) => {
                    return <li key={idx}>{expense.money}</li>
                })
            }
        </div>
    );
};

const mapStateToProps = state => ({
    expenses: state.expenses
})
export default connect(mapStateToProps)(ExpenseList);
