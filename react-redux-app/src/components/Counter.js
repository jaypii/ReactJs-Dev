import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  render() {
    return (
      <div className="card p-2 m-auto w-50">
        <h2>Counter</h2>
        <div>
          <button className="btn btn-success" onClick={this.decrement}>-</button>
          <span className="lead ml-5 mr-5">{this.props.count}</span>
          <button className="btn btn-success" onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

// in this object, keys become prop names,
// and values should be action creator functions.
// They get bound to `dispatch`.
const mapDispatchToProps = {
  increment,
  decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);