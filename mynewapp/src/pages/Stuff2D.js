import React, { Component } from "react";
import CanvasShape from "../components/canvasShape";

class Stuff2D extends Component {
  render() {
    return (
        <div className="uk-container">
            <h3>Stuff 2D</h3>
            <hr/>
            <div className="uk-child-width-1-1@s uk-grid-collapse uk-grid-small uk-grid">
                <div className="uk-width-expand@m">
                    <div className="uk-card uk-card-small uk-card-default uk-card-body">
                        <CanvasShape />  
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
   
export default Stuff2D;