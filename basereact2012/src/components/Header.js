import React from 'react';

class Header extends React.Component {
   render() {
      return (
         <div>
            <div class="row">
               <div class="col-1">
                  <img src="/logo192.png" height="80px" alt="Logo"></img>
               </div>
               <div class="col-9">
                  <h1>Header</h1>
               </div>
               <div class="col-2">
                  &nbsp;
               </div>
            </div>
         </div>
      );
   }
}

export default Header;