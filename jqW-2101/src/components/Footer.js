import React, {Component} from 'react';

const today = new Date();

function minutes_with_leading_zeros(dt) { 
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
};

class Footer extends Component {
   render() {
      return (
         <div className="row mt-3 p-2 bg-light">
            <div className="col">
               &copy; 2021, J. Polzin
            </div>
            <div className="col text-center">
               &nbsp;
            </div>
            <div className="col text-end">
                  {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                  + ' ' + today.getHours() + ':' + minutes_with_leading_zeros(today)}
            </div>
         </div>
     );
   }
}

export default Footer;