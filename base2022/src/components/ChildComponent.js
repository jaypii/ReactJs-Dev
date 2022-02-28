import React from 'react'

function ChildComponent(props) {
   return (
      <div className="d-flex flex-row justify-content-between">
         <h5>ChildComponent: as Functional component</h5>
         <p>&nbsp;</p>
         <button className="btn-primary btn-sm" onClick={() =>props.greetHandler('Child component')}>Greet Parent</button>
      </div>
   )
}

export default ChildComponent