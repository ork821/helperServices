import React from 'react';
import {Alert} from "react-bootstrap";

const StartPage = () => {
    return (
        <div>
            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    This is you future favourite app :)
                    It helps you to write todos and other things!)
                </p>
                <hr />
                <p className="mb-0">
                    This is must be the best app ever :))))
                </p>
            </Alert>
        </div>
    );
};

export default StartPage;
