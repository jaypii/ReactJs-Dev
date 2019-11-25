import React from 'react';
//import ReactDOM from 'react-dom';
// ***** Simple Clock component *****

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000);
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
            <div class="card mt-3">
                <h5 class="card-header">Clock Component</h5>
                <div class="card-body">
                    <h3>{this.state.date.toLocaleTimeString()}</h3>
                </div>
            </div> 
        );
    }
}

export default Clock;