import React from 'react';
import Clock from "./clock";
import TestFComponent from "./fTestComponent";

class Content extends React.Component {
   render() {
      return (
         <div className="card p-2 mt-2">
            <div className="d-flex justify-content-between">
               <h2>Content:  as Class Component</h2>
               <Clock />
            </div>
            <div className="row mt-2 p-2">
               <div className="col-2">col 1</div>
               <div className="col-8 text-center">
                  <TestFComponent />
               </div>
               <div className="col-2 text-end">col 3</div>
            </div>
         </div>
      );
   }
}

export default Content;