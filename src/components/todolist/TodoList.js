import React from 'react';
import {connect} from "react-redux";
import Todo from "../todo/Todo";
import {ListGroup} from "react-bootstrap";

const TodoList = ({todos}) => {
    return (
        <ListGroup>
            {todos.map((elem) => {
                return <Todo key={elem.id}
                             id={elem.id}
                             text={elem.text}
                             completed={elem.completed}
                />

            })}
        </ListGroup>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
})

export default connect(mapStateToProps)(TodoList);
