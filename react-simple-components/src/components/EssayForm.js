import React,  { Component } from 'react';

class EssayForm extends Component {
   constructor(props) {
     super(props);
     this.state = {
       value: 'Please write an essay about your favorite DOM element.'
     };
 
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
   }
 
   handleChange(event) {
     this.setState({value: event.target.value});
   }
 
   handleSubmit(event) {
     alert('An essay was submitted: ' + this.state.value);
     event.preventDefault();
   }
 
   render() {
     return (
       <form onSubmit={this.handleSubmit}>
         <div className="form-group">
         <label>
           Essay:&nbsp;
           <textarea value={this.state.value} className="form-control" onChange={this.handleChange} />
         </label>&nbsp;
         </div>
         <input type="submit" value="Submit" className="btn btn-outline-primary"/>
       </form>
     );
   }
 }

 export default EssayForm