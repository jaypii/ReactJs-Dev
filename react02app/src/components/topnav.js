import React , { Component }from 'react';
//import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import logo from '../logo.svg';

class TopNav extends Component {
  render() {
    return(
      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <a class="navbar-brand" href="/"><img src={logo}  className="App-logo" alt="logo"/></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              {/*
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              */}
            </ul>
          </div>
        </nav>
      </BrowserRouter>
    );
  }
};

export default TopNav;