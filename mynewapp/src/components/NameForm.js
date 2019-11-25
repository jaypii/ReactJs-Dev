import React, { Component } from "react";

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="name" class="uk-form-label">Name: </label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input uk-width-1-1" id="name" value={this.state.value} onChange={this.handleChange} />
            </div>
          </div>
          <button type="submit" class="uk-button uk-button-primary uk-margin-top">Send</button>
        </form>
      );
    }
  }
export default NameForm;