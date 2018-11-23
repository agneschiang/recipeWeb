import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import App from './App'
import { Header } from './components/Header';
import HomePage from './components/HomePage';
import Login from './components/Login'
import './css/styles.css';



export const AppRouter: React.StatelessComponent<{}> = () => {
    return (

        <BrowserRouter>
            <div>
                <Header />
                <main>
                    <Route exact={true} path="/" component={HomePage} />
                    <Route path="/App" component={App} />
                    <Route path="/Login" component={Login} />
                    <Redirect from='*' to='/' />
                </main>
            </div>
        </BrowserRouter>

    );
}