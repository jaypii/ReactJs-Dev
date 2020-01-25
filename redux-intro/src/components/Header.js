import React from 'react';
//import { connect } from 'react-redux';
import { Jumbotron } from 'react-bootstrap';

class Header extends React.PureComponent {
   render() {
      return(
         <Jumbotron fluid className="p-3">
            <h1>Redux Intro</h1>
         </Jumbotron>
      )
   }
}

export default Header;