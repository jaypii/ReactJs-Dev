import React, { Component } from "react";
import Graph3D from "../components/graph3D";


class Stuff3D extends Component {
  render() {
    return (
        <div className="uk-container uk-container-large">
            <h3>Stuff 3D</h3>
            <hr/>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match uk-grid">
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <Graph3D />
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        Item
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
   
export default Stuff3D;