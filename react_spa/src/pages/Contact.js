import React, { Component } from "react";
import NameForm from '../components/NameForm';

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Contact</h3>
        <hr />
        <div className="alert alert-info" role="alert">
          <p>The easiest thing to do is post on
            our <a rel="noopener noreferrer" href="http://forum.kirupa.com" target="_blank">forums</a>.
          </p>
        </div>
        <div className="row mt-2">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
              <NameForm />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card p-2">
              Empty card
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;