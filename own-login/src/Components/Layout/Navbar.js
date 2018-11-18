import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
    componentDidMount() {
        document.querySelector('a.active').parentElement.classList.add('active');
    }
    componentDidUpdate() {
        document.querySelector('li.active').classList.remove('active');
        document.querySelector('a.active').parentElement.classList.add('active');
    }
    render() {
        return (
            <div className="Navbar">
                <nav>
                    <ul>
                        <li><NavLink activeClassName='active' to='/home'>Home</NavLink></li>
                        <li><NavLink activeClassName='active' to='/friends'>Friends</NavLink></li>
                        <li><NavLink activeClassName='active' to='/ranking'>Ranking Single Player</NavLink></li>
                        <li><NavLink activeClassName='active' to='/createteam'>Create Your Team</NavLink></li>
                        <li><NavLink activeClassName='active' to='/teamranking'>Ranking Teams</NavLink></li>
                        <li><NavLink activeClassName='active' to='/account'>Account</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;