
import React, { Component } from "react";

const today = new Date();

function minutes_with_leading_zeros(dt) { 
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
};

class Footer extends Component {
    render() {
        return(
            <div className="row mt-3 bg-light p-2">
                <div className="col">
                    &copy; 2019, J. Polzin
                </div>
                <div className="col text-center">
                    &nbsp;
                </div>
                <div className="col text-right">
                    {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                    + ' ' + today.getHours() + ':' + minutes_with_leading_zeros(today)}
                </div>
            </div>
        );
    }
}

export default Footer;
