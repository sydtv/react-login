import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Layout/Navbar';
import Routes from './Routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar/>
                    <div className="appcontainer">
                        <Routes/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;