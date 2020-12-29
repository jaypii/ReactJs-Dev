import React, { Component } from 'react';

class Reservation extends Component {
   constructor(props) {
     super(props);
     this.state = {
       isGoing: true,
       numberOfGuests: 2
     };
 
     this.handleInputChange = this.handleInputChange.bind(this);
   }
 
   handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;
 
     this.setState({
       [name]: value
     });
   }
 
   render() {
     return (
       <form>
         <div className="form-group form-check">
         <input
             name="isGoing"
             type="checkbox"
             checked={this.state.isGoing}
             className="form-check-input"
             onChange={this.handleInputChange} />

         <label className="form-check-label">
           Is going 
         </label>
         <br />
         <label>
           Number of guests:&nbsp;
           <input
             name="numberOfGuests"
             type="number"
             value={this.state.numberOfGuests}
             onChange={this.handleInputChange} />
         </label>
         </div>
       </form>
     );
   }
 }
 export default Reservation;