import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class TopNav extends Component {
    render() {
        return(
            <nav className="uk-navbar uk-navbar-container uk-sticky">
                <div className="uk-navbar-left">
                    <a className="uk-navbar-item uk-logo" href="/">
                        <img src="logo192.png" width="50px" alt="logo"/>
                    </a>
                    <ul className="uk-navbar-nav">
                        <li><NavLink className="nav-item nav-link" to="/">Home</NavLink></li>
                        <li><NavLink className="nav-item nav-link" to="/stuff">Stuff</NavLink></li>
                        <li><NavLink className="nav-item nav-link" to="/stuff2">Stuff 2</NavLink></li>
                        <li><NavLink className="nav-item nav-link" to="/stuff2d">Stuff 2D</NavLink></li>
                        <li><NavLink className="nav-item nav-link" to="/stuff3d">Stuff 3D</NavLink></li>
                        <li><NavLink className="nav-item nav-link" to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>  
        );
    }
}

export default TopNav;