import React, { Component } from "react";
import NameForm from '../components/NameForm';

class Contact extends Component {
  render() {
    return (
      <div class="uk-container">
        <h3>Contact</h3>
        <hr />

        <div className="uk-child-width-1-3@m uk-grid">
          <div>
            <div className="uk-card uk-card-default uk-card-body">
              <NameForm />
            </div>
          </div>
          <div className="uk-width-expand@m">
            <div className="uk-card uk-card-default uk-card-body">
              Empty space
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;