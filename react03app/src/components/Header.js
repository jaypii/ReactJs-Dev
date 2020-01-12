import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a className="navbar-brand" href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to='/about'>About me</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header