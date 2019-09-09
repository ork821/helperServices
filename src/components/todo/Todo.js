import React from 'react';
import {Button, ListGroup} from "react-bootstrap";
import './todo.styles.css'

const Todo = ({id, completed, text, onClick}) => {
    return (
        <div className="todo-element" id={id}
             style={{textDecoration: completed ? 'line-through' : 'none'}}
             onClick={onClick}>

                <div className="todo-text">{text}</div>
                <Button variant="danger">✘</Button>

        </div>

    );
};


export default Todo;
