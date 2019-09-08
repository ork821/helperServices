import React from 'react';
import {ListGroup, InputGroup, FormControl} from "react-bootstrap";

const Todo = ({text}) => {
    return (
        <div className="todo">
            <ListGroup.Item>
                <div className="todo">
                    <input type="checkbox"/>
                    {text}
                </div>
            </ListGroup.Item>
        </div>

    );
};

export default Todo;
