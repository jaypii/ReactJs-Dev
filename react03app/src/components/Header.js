import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../logo.svg';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"><Link class="nav-link" to='/'>Home</Link></li>
          <li class="nav-item"><Link class="nav-link" to='/about'>About me</Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Header