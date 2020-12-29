import React from 'react'

function ChildComponent(props) {
   return (
      <div>
         <h3>ChildComponent: as Functional component</h3>
         <button className="btn-primary btn-sm" onClick={() =>props.greetHandler('Child component')}>Greet Parent</button> 
      </div>
   )
}

export default ChildComponent
