import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from '@pages/login';
import SignUp from '@pages/signup'

export default class Routes extends Component {
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path='/'
                            component={Login}
                        />
                        <Route
                            exact
                            path='/register'
                            component={SignUp}
                        />
                    </Switch>
                </BrowserRouter>
        )
    }
}