import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class TopNav extends React.Component {
   render() {
      return(
         <Navbar bg="light" >
            <Navbar.Brand href="/">React-Bootstrap &amp; React Redux</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                     <Nav.Link href="#link">Link</Nav.Link>
                  </Nav>
               </Navbar.Collapse>
         </Navbar>
      )
   };
}

export default TopNav;