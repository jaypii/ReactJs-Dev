import React from 'react';

function BoilingVerdict(props) {
   if (props.celsius >= 100) {
     return <p className="alert alert-danger font-weight-bold mt-2">The water would boil!!!</p>;
   } else if (props.celsius <= 0) {
      return <div className="alert alert-info mt-2">The water would freeze!</div>
   }
   return <div className="alert alert-success mt-2"> The water would not boil.</div>;
}

export default BoilingVerdict