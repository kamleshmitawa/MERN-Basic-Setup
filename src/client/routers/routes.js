import React from 'react';
import Home from '../home/home';
import Login from '../login/login';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Login} />
                <Route exact path="/home" component={Home} />
            </Switch>
        </Router>

    )
}