import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class Header extends Component {
   render() {
      return (
         <div className="row App-header">
            <div className="col-md-1">
               <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-md-11 pt-2">
               <h3>Learn React</h3>
            </div>
         </div>
     );
   }
}

export default Header;