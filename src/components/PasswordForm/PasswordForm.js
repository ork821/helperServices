import React from 'react';
import {Form, Row, Col, Button} from "react-bootstrap";
import {connect} from 'react-redux'
import {AddPassword} from "../../redux/actions/password.actions";

const PasswordForm = ({addPassword}) => {

    const submitForm = (e) => {
        e.preventDefault()
        let name = document.forms['password_form'].elements['name'].value
        let login = document.forms['password_form'].elements['login'].value
        let password = document.forms['password_form'].elements['password'].value
        document.forms['password_form'].elements['name'].value = ''
        document.forms['password_form'].elements['login'].value = ''
        document.forms['password_form'].elements['password'].value = ''
        addPassword(name, login, password)
    }
    return (
        <Form onSubmit={submitForm} id="password_form">
            <Row>
                <Col>
                    <Form.Control id="name" placeholder="Name" />
                </Col>
                <Col>
                    <Form.Control id="login" placeholder="Login" />
                </Col>
                <Col>
                    <Form.Control id="password" placeholder="Password" />
                </Col>
                <Col>
                    <Button type="submit" variant="success">Add</Button>
                </Col>
            </Row>
        </Form>
    );
};

const mapDispatchToProps = dispatch => ({
    addPassword: (name, login, password) => dispatch(AddPassword(name, login, password))
})

export default connect(null, mapDispatchToProps)(PasswordForm);
