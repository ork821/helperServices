import React from 'react';
import {connect} from "react-redux";
import Todo from "../todo/Todo";
import {ListGroup} from "react-bootstrap";
import {ChangeComplete} from "../../redux/actions/todo.actions";

const TodoList = ({todos, changeComplete}) => {
    return (
        <ListGroup>
            {todos.map((elem) => {
                return <Todo key={elem.id} {...elem}
                             onClick={() => changeComplete(elem.id)}
                />
            })}
        </ListGroup>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = (dispatch) => ({
    changeComplete: (id) => dispatch(ChangeComplete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
