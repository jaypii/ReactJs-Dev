import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         parentName: 'Parent' 
      }

      this.greetParent = this.greetParent.bind(this)
   }

   greetParent(childName){
      alert(`Hello ${this.state.parentName} from ${childName}`)
   }
   
   render() {
      return (
         <div>
            <div className="card mt-2 p-2 bg-light">
               <h2>Parent Component: as Class component</h2>
               <hr />
               <div class="card-body">
                  <ChildComponent greetHandler={this.greetParent}/>
               </div>
            </div>  
         </div>
      )
   }
}

export default ParentComponent
 