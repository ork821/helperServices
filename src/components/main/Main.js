import React from 'react';
import TodoPage from "../../pages/TodoPage/TodoPage";
import {Switch, Route} from "react-router-dom";
import PasswordPage from "../../pages/PasswordPage/PasswordPage";
import StartPage from "../../pages/StartPage/Start";
import './main.styles.css'
import MoneyPage from "../../pages/MoneyPage/MoneyPage";


const Main = () => {
    return (
        <div className='main'>
            <Switch>
                <Route path="/" exact component={StartPage} />
                <Route path="/todo" exact component={TodoPage} />
                <Route path="/passwords" exact component={PasswordPage} />
                <Route path="/money" exact component={MoneyPage} />
            </Switch>
        </div>
    );
};

export default Main;
