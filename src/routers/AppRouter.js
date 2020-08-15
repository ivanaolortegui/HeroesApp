import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from '../components/login/LoginScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DCScreen from '../components/dc/DCScreen';
import { Navbar } from '../components/ui/Navbar';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/marvel" component={MarvelScreen} />
                <Route exact path="/dc" component={DCScreen} />
                <Redirect to='/marvel' />
            </Switch>
        </Router>
    )
}

export default AppRouter
