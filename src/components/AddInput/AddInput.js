import React from 'react';
import {Form, Row, Col, Button} from "react-bootstrap";

const AddInput = ({idForm, idFirstInput, idSecondInput, submitForm}) => {
    return (
        <Form id={idForm} onSubmit={submitForm}>
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

export default AddInput;
