import React, { Component } from "react";
import NameForm from '../components/NameForm';

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Contact</h3>
        <hr />
        <div className="row mt-2">
          <div className="col-md-3">
            <div className="card bg-light p-2">
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