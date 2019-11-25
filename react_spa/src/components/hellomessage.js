import React, { Component } from "react";

class HelloMessage extends Component {
    render() {
        return(
            <div>
                <h4>Hello {this.props.name}</h4>
            </div>
        );
    }
}

export default HelloMessage;