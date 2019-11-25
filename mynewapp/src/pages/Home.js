import React, { Component } from "react";

import Comment from '../components/comment';
import HelloMessage from '../components/hellomessage';

class Home extends Component {
  render() {
    return (
        <div className="uk-container">
            <div className="uk-card uk-height-medium uk-card-secondary uk-card-body uk-width-1-1@m uk-margin-small uk-text-center">
                <h2 className="uk-heading-medium">Welcome to my site!</h2>
                <p className="uk-lead" >
                    This site uses React, React routing and UIKit 3<br/>
                    and is a single page application.
                </p>
            </div>
            <div className="uk-container">
                <div className="uk-child-width-1-3@s uk-grid">
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <h4 className="uk-card-title">Comment Component</h4>
                        <Comment />
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <h4 className="uk-card-title">Hello message Component</h4>
                        <HelloMessage name="John"/>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <h4 className="uk-card-title">Component place</h4>
                        card 3
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}
 
export default Home;