import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from '../pages/login'

export default class Routes extends Component {
    render() {
        return (
                <BrowserRouter>
                    <div>
                        <Route
                            exact
                            path='/'
                            component={Login}
                        />
                    </div>
                </BrowserRouter>
        )
    }
}