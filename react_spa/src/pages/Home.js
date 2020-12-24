import React, { Component } from "react";

import Comment from '../components/comment';
import HelloMessage from '../components/hellomessage';

class Home extends Component {
  render() {
    return (
    <div>
        <div className="jumbotron text-center mb-2">
            <h3 className="display-5">Welcome to my site!</h3>
            <p className="lead" >
                This site uses React, React routing and Bootstrap 4.5.3<br/>
                and is a single page application.
            </p>
        </div>
        <div className="row">
            <div className="col">
                <div className="card">
                    <h4 className="card-header bg-success text-white">Comment Component</h4>
                    <div className="card-body">
                        <Comment />
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <h4 className="card-header bg-info text-white">Hello message Component</h4>
                    <div className="card-body">
                        <HelloMessage name="John"/>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                <h4 className="card-header bg-warning text-white">Component place</h4>
                    <div className="card-body">
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