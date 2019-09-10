import React from 'react';
import {connect} from "react-redux";
import Todo from "../todo/Todo";
import {ChangeComplete, DeleteTodo} from "../../redux/actions/todo.actions";

const TodoList = ({todos, changeComplete, deleteTodo}) => {
    return (
        <div>
            {todos.map((elem) => {
                return <Todo key={elem.id} {...elem}
                             changeComplete={() => changeComplete(elem.id)}
                             deleteToDo={() => deleteTodo(elem.id)}
                />
            })}
        </div>
    );
};

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    changeComplete: (id) => dispatch(ChangeComplete(id)),
    deleteTodo: (id) => dispatch(DeleteTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
