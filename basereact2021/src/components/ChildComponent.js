import React from 'react'
import Clock from "./clock";

function ChildComponent(props) {
   return (
      <div className="row">
         <div className="col">
            <h5>ChildComponent: as Functional component</h5>
            <button className="btn-primary btn-sm" onClick={() =>props.greetHandler('Child component')}>Greet Parent</button> 
         </div>
      </div>
   )
}

export default ChildComponent
