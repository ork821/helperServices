import React from 'react';
import {Row, Col, Button} from "react-bootstrap";
import './passworditem.styles.css'

const PasswordItem = ({name, login, password, hidden, visiblePass}) => {
    return (
        <div className="password">
            <Row>
                <Col>
                    {name}
                </Col>
                <Col>
                    {!hidden ? login : '*****'}
                </Col>
                <Col>
                    {!hidden ? password : '*****'}
                </Col>
                <Col>
                    <Button variant='success' onClick={visiblePass}>
                        {hidden ? 'Show' : 'Hide'}
                    </Button>
                    <Button variant='danger'>Delete</Button>
                </Col>

            </Row>
        </div>
    );
};



export default PasswordItem;
