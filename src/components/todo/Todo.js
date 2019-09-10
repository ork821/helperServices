import React from 'react';
import {Button} from "react-bootstrap";
import './todo.styles.css'


const Todo = ({id, completed, text, changeComplete, delTodo}) => {

    const handleClick = (e) => {
        e.stopPropagation()
        delTodo()
    }

    return (
        <div className="todo-element" id={id}
             onClick={changeComplete}>
            <div className="todo-text"
                 style={{textDecoration: completed ? 'line-through' : 'none'}}>
                {text}
            </div>
            <Button variant="danger" onClick={handleClick}>✘</Button>

        </div>

    );
};


export default Todo;
