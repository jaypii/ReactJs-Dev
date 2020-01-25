import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';

class Counter extends React.Component {

   increment = () => {
      this.props.dispatch({ type: 'INCREMENT'})
   }

   decrement = () => {
      this.props.dispatch({ type: 'DECREMENT'})
   }

   reset = () => {
      this.props.dispatch({ type: 'RESET'})
   }


   render() {
    return (
      <Card className="text-center">
        <h3 >Counter</h3>
        <Card.Body>
          <button className="btn btn-success" onClick={this.decrement}>-</button>&nbsp;&nbsp;
          &nbsp;&nbsp;<span>{this.props.count}</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn-success" onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button className="btn btn-warning" onClick={this.reset}>R</button>
          </Card.Body>
      </Card>
    )
   }
}

function mapStateToProps(state) {
   return {
     count: state.count
   };
}

export default connect(mapStateToProps)(Counter);