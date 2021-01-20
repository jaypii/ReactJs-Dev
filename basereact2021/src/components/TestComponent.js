import React, { Component } from 'react'

export class TestComponent extends Component {
   render() {
      return (
         <div className="card mt-2 bg-light p-1">
            <div className="alert alert-warning" role="alert">
               <p className="text-center">
                  <strong>Hello Test (class component)</strong>
               </p>
            </div>
         </div>
      )
   }
}

export default TestComponent
