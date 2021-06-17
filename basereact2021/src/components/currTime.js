import React from 'react';

class CurrTime extends React.Component {

   constructor(props) {
      super(props);
      this.state = {date: new Date()};
   }

   render() {
     return (
       <div>
         <h5>It is {this.state.date.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit' })}</h5>
      </div>
     );
   }
 }

 export default CurrTime;