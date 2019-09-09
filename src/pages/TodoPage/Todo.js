import React from 'react';
import Input from "../../components/Input/Input";
import TodoList from "../../components/todolist/TodoList";

const TodoPage = () => {
    return (
        <div>
            <Input textBefore="Enter your task" btnText="Add Task"/>
            <TodoList/>
        </div>
    );
};



export default TodoPage;
