import React from 'react';
import Input from "../../components/Input/Input";
import {connect} from "react-redux";

const Todo = ({todos}) => {
    return (
        <div>
            <Input textBefore="Enter your task" btnText="Add Task"/>

        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(Todo);
