import React, { Component } from "react";
import logo from '../logo.svg';
import {NavLink} from "react-router-dom";

class TopNav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <a className="navbar-brand" href="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/stuff">Stuff</NavLink>
                        <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </nav>
        );
    }
}

export default TopNav;