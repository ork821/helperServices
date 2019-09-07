import React from 'react';
import Todo from "../TodoPage/Todo";
import {Switch, Route} from "react-router-dom";
import Password from "../PasswordPage/Passwords";
import StartPage from "../StartPage/Start";
import './main.styles.css'


const Main = () => {
    return (
        <div className='main'>
            <Switch>
                <Route path="/" exact component={StartPage} />
                <Route path="/todo" exact component={Todo} />
                <Route path="/passwords" exact component={Password} />
            </Switch>
        </div>
    );
};

export default Main;
