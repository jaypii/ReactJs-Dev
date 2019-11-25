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
          <div class="form-group row">
            <label for="name" class="col-sm-2col-form-label">Name: </label>
            <div class="col-sm-10">
                <input type="text" id="name" value={this.state.value} onChange={this.handleChange} />
            </div>
          </div>
          <button type="submit" class="btn btn-primary mb-2">Send</button>
        </form>
      );
    }
  }
export default NameForm;