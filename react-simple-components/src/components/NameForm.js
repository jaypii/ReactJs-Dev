import React, { Component } from 'react';

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
         <div className="form-group">
         <label>
            Name:&nbsp;
            <input type="text" value={this.state.value} className="form-control" onChange={this.handleChange} />
         </label>&nbsp;
         </div>
         <input type="submit" value="Submit" className="btn btn-outline-warning"/>
      </form>
    );
  }
}

export default NameForm;