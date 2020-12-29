import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div>
            <div className="row">
               <div className="col-1">
                  <img src="/logo192.png" height="80px" alt="Logo"></img>
               </div>
               <div className="col-9">
                  <h1>Learning or repeating React basics</h1>
               </div>
               <div className="col-2">
                  &nbsp;
               </div>
            </div>
         </div>
      );
   }
}

export default Header;