import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Blog from './pages/Blog';

import * as serviceWorker from './serviceWorker';

const routing = (
   <Router>
      <div className="container">
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
                  <Link className="nav-link" to="/hooks">Hook Examples</Link>
               </li>
               <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog Test</Link>
               </li>
            </ul>
         </nav>
      </div>
      <Route exact path="/" component={Home} />
      <Route path="/hooks" component={App} />
      <Route path="/blog" component={Blog} />
   </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
