import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.props.increment();
  }

  decrement = () => {
    this.props.decrement();
  }

  reset = () => {
    this.props.reset();
  }

  render() {
    return (
      <div className="card p-2 m-auto w-50">
        <h2>Counter</h2>
        <div>
          <button className="btn btn-info" onClick={this.decrement}>-</button>
          <span className="lead ml-5 mr-5">{this.props.count}</span>
          <button className="btn btn-info" onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button className="btn btn-warning" onClick={this.reset}>Reset</button>
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
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);