import React from 'react';
//import { connect } from 'react-redux';
import { Card, Row, Col } from 'react-bootstrap';

const today = new Date();

function minutes_with_leading_zeros(dt) { 
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
};

class Footer extends React.PureComponent {
   render() {
      return(
         <Card bg="light" className="mt-3 p-2">
            <Card.Body>
               <Row>
                  <Col>&copy; 2019, J. Polzin</Col>
                  <Col className="text-center">&nbsp;</Col>
                  <Col className="text-right">
                     {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                     + ' ' + today.getHours() + ':' + minutes_with_leading_zeros(today)}
                  </Col>
               </Row>
            </Card.Body>
         </Card>
      )
   }
}

export default Footer;