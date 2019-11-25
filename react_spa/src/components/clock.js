import React, { Component } from "react";

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });    
    }

    render() {
      return (
        <div className="border border-warning p-1 w-50">
          <h4>{this.state.date.toLocaleTimeString()}</h4>
        </div>
      );
    }
}

export default Clock;