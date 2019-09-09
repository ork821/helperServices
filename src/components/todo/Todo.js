import React from 'react';
import {ListGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {ChangeComplete} from "../../redux/actions/todo.actions";

const Todo = ({text, completed, id, changeComplete}) => {
    const handleChange = (e) => {
        changeComplete(e.target.id)
    }

    return (
        <div className="todo">
            <ListGroup.Item>
                <div className="todo">
                    <input type="checkbox" id={id} checked={completed} onChange={handleChange}/>
                    {text}
                </div>
            </ListGroup.Item>
        </div>

    );
};

const mapDispatchToProps = dispatch => ({
    changeComplete: id => dispatch(ChangeComplete(id))
})

export default connect(null, mapDispatchToProps)(Todo);
