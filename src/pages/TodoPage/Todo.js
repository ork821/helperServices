import React from 'react';
import Input from "../../components/Input/Input";
import {connect} from "react-redux";
import TodoList from "../../components/todolist/TodoList";

const Todo = () => {
    return (
        <div>
            <Input textBefore="Enter your task" btnText="Add Task"/>
            <TodoList/>
        </div>
    );
};



export default Todo;
