import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {connect} from "react-redux";
import {AddExpense} from "../../redux/actions/expense.actions";

const ExpenseInput = ({idForm, idFirstInput, idSecondInput, addExpense}) => {
    const submitForm = (e) => {
        e.preventDefault()
        let money = document.forms[idForm].elements[idFirstInput].value
        let comment = document.forms[idForm].elements[idSecondInput].value
        document.forms[idForm].elements[idFirstInput].value = ''
        document.forms[idForm].elements[idSecondInput].value = ''
        addExpense(money, comment)
    }

    return (
        <Form id={idForm} onSubmit={(e) => submitForm(e)}>
            <Row>
                <Col>
                    <Form.Control placeholder="$" id={idFirstInput}/>
                </Col>
                <Col>
                    <Form.Control placeholder="Enter Comment" id={idSecondInput}/>
                </Col>
                <Col>
                    <Button type="submit">Add</Button>
                </Col>
            </Row>
        </Form>
    );
};
const mapDispatchToProps = dispatch => ({
    addExpense: (money, comment) => dispatch(AddExpense(money, comment))
})

export default connect(null, mapDispatchToProps)(ExpenseInput);
