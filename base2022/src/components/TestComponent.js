import React, { Component } from 'react'
import CurrTime from "./currTime";

export class TestComponent extends Component {
   render() {
      return (
         <div className="card mt-2 bg-light p-2">
            <div className="alert alert-warning" role="alert">
               <h4>Hello, Welcome (class component)</h4>
               <CurrTime />
            </div>
         </div>
      )
   }
}

export default TestComponent
