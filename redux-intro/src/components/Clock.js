import React, { Component } from "react";

const toptions ={
    timeZone: "Europe/Zurich",
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
}

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
        <div className="border border-warning p-1">
          <h3>{this.state.date.toLocaleTimeString("CH",toptions)}</h3>
        </div>
      );
    }
}

export default Clock;