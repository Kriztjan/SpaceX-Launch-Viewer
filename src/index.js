import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import {HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import About from './components/About/About'
import Roadster from './components/Roadster/Roadster'
import LaunchBookings from './components/Bookings/LaunchBookings';
import Launches from './components/Launches/Launches'
import LaunchInfo from './components/Launches/Launch/LaunchInfo'

// ReactDOM.render(, document.getElementById('root'));

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" render={ () => <Redirect to="/about" />} />

            <Route path="/about" component={About} />
            <Route path="/roadster" component={Roadster} />
            <Route path="/bookings" component={LaunchBookings} />
            <Route path="/launches" render={() => (
                <Switch>
                    <Route path="/launches/:id" component={LaunchInfo} />
                    <Route component={Launches} />
                </Switch>
            )} />
        </Switch>
    </Router>,
    document.getElementById("root")
)