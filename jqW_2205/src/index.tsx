import React from 'react';
import ReactDOM from 'react-dom';
import {Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';


import Stuff01 from './pages/Stuff01';
import Stuff02 from './pages/Stuff02';

import * as serviceWorker from './serviceWorker';

const routing = (
   <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
         <a className="navbar-brand" href="/">Navbar</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <ul className="navbar-nav mr-auto">
            <li className="nav-item">
               <Link className="nav-link" to="/">Home</Link>
            </li>
             <li className="nav-item">
               <Link className="nav-link" to="/stuff01">Stuff01</Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/stuff02">Stuff02</Link>
            </li>

         </ul>
      </nav>

      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/stuff01" element={<Stuff01 />} />
         <Route path="/stuff02" element={<Stuff02 />} />
      </Routes>
   </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
