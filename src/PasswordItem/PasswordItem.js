import React from 'react';
import {Row, Col} from "react-bootstrap";

const PasswordItem = ({name, login, password}) => {
    return (
        <div className="password">
            <Row>
                <Col>
                    {name}
                </Col>
                <Col>
                    {login}
                </Col>
                <Col>
                    {password}
                </Col>
                <Col>
                    78
                </Col>

            </Row>
        </div>
    );
};

export default PasswordItem;
