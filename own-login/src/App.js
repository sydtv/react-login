import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Layout/Navbar';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path={['/home', '/friends', '/ranking', '/createteam', '/teamranking', '/account']} component={Navbar} />
                    <div>
                        <Routes/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;