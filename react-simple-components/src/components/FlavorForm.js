import React,  { Component } from 'react';

class FlavorForm extends Component {
   constructor(props) {
     super(props);
     this.state = { value: 'Coconut'};
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   handleChange(event) {
     this.setState({value: event.target.value});
   }
 
   handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
   }
 
   render() {
     return (
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">
      <label>
        Pick your favorite flavor:&nbsp;
        <select value={this.state.value} className="form-control" onChange={this.handleChange}>
          <option value="Grapefruit">Grapefruit</option>
          <option value="Lime">Lime</option>
          <option value="Coconut">Coconut</option>
          <option value="Mango">Mango</option>
        </select>
      </label>
      </div>
      <input type="submit" value="Submit" className="btn btn-outline-success"/>
    </form>
     );
   }
 }

 export default FlavorForm