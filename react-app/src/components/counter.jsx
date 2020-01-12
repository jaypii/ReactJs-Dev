import React, { Component } from 'react';

class  Counter extends Component {
   state = {
      value: this.props.counter.value,
   };
   
   // Using an arrow function
   handleIncrement = () => {
      //console.log('Increment Clicked', this);
      this.setState({value: this.state.value + 1})
   }

   handleDecrement = () => {
      this.setState({value: this.state.value - 1})  
   }
  
   render() {
      return(
         <div className="card mt-2 p-2">
            <h6>Counter {this.props.counter.id}</h6>
            <div className="row mt-2">
               <div className="col">
                  <span  className={this.getBadgeClasses()}>
                     {this.formatCount()}
                  </span>
               </div>
               {/* Button row */}
               <div className="col">
                  <button onClick={this.handleIncrement}  className="btn btn-secondary btn-sm">&nbsp;+&nbsp;</button>
               </div>
               <div className="col">
                  <button onClick={this.handleDecrement}  className="btn btn-secondary btn-sm">&nbsp;-&nbsp;</button>
               </div>
               <div className="col">
                  <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Del</button>
               </div>
            </div>
         </div> 
      ); 
   }  
  
   getBadgeClasses() {
      let classes = "badge m-2 badge-"; 
      classes += this.state.value === 0 ? "warning" : "primary";
      return classes;  
   }

   formatCount() {
      const { value: count } = this.state;
      return count === 0 ? 'Zero' : count;
   }
}
 
export default Counter;       