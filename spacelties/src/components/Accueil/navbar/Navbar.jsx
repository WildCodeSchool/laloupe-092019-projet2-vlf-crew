import React from 'react';
import './navbar.css'

class Footer extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <header class="header">
                        <a href="/" className="brandlogo"><img src="./logo.png" height="35px" alt="pizzalogo" /></a>
                        <a href="/" className="brand">Spacelties</a>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
                        <ul className="menu">
                            <li><a href="#choose">I Want to Choose</a></li>
                            <li><a href="#surprise">Surprise Me !</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </header>
                </nav>
            </header>
        )
    }
}

export default Footer; 