import React from 'react';

function BoilingVerdict(props) {
   if (props.celsius >= 100) {
     return <p className="text-danger font-weight-bold">The water would boil!!!</p>;
   } else if (props.celsius <= 0) {
      return <p className="text-info">The water would freeze!</p>
   }
   return <p className="text-success"> The water would not boil.</p>;
}

export default BoilingVerdict