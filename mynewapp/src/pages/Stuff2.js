import React, { Component } from "react";

class Stuff2 extends Component {
  render() {
    return (
        <div className="uk-container">
            <h3>Stuff 2</h3>
            <hr/>
            <div className="uk-child-width-1-4@s uk-grid-collapse uk-grid-small uk-grid">
                <div>
                    <div className="uk-card uk-card-small uk-card-default uk-card-body">
                        <h4 className="uk-card-title">Left bar</h4>
                    </div>
                </div>
                <div className="uk-width-expand@m">
                    <div className="uk-card uk-card-small uk-card-primary uk-card-body">
                        <h4 className="uk-card-title">Content</h4>   
                    </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-small uk-card-secondary uk-card-body">
                            <h4 className="uk-card-title">Right bar</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
   
export default Stuff2;