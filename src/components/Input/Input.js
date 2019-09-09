import React from 'react';
import {connect} from "react-redux";
import {AddTodo} from "../../redux/actions/todo.actions";

const Input = ({addTodo}) => {
    let input

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(input.value)
        input.value = ''
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={node => input = node} />
            <button type='submit'>add task</button>
        </form>

    );

};

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => dispatch(AddTodo(text))
})


export default connect(null, mapDispatchToProps)(Input);

