import React, {Component} from 'react';
import {Button, InputGroup} from "react-bootstrap";
import {connect} from "react-redux";
import {AddTodo} from "../../redux/actions/todo.actions";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    handleClick = () => {
        AddTodo(this.state.input)
        this.setState({
            input: ''
        })
    }

    render() {
        const {textBefore, btnText} = this.props
        return (
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-default">
                        {textBefore}
                    </InputGroup.Text>
                </InputGroup.Prepend>
                <input type='text' onChange={this.handleChange} value={this.state.input}/>
                <InputGroup.Append>
                    <Button variant="success"
                            onClick={this.handleClick}>
                        {btnText}
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        );
    }
};

const mapDispatchToProps = dispatch => {

}




export default connect()(Input);
