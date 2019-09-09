import React from 'react';
import {ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {ChangeComplete} from "../../redux/actions/todo.actions";

const Todo = ({id, completed, text, onClick}) => {
    console.log(id, completed, text, )
    return (
        <ListGroup.Item>
            <div className="todo" id={id}
                 style={{textDecoration: completed ? 'line-through' : 'none'}}
                 onClick={onClick}
            >
                {text}
            </div>
        </ListGroup.Item>

    );
};



export default Todo;
