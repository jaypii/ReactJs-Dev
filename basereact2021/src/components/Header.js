import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div>
            <div className="card bg-light mt-2 p-2">
               <div className="d-flex justify-content-between">
                  <div><img src="/logo192.png" height="50px" alt="Logo"></img></div>
                  <h1>React 17.x basic app</h1>
                  <div>&nbsp;</div>
               </div>
            </div>
         </div>
      );
   }
}

export default Header;