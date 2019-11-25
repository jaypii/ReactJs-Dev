
import React from "react";

const today = new Date();

function minutes_with_leading_zeros(dt) { 
    return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
};

const Footer = () => {
    return(
        <div className="uk-grid-divider uk-child-width-expand@s uk-grid uk-margin-top uk-background-muted uk-padding-small">
            <div>
                &copy; 2019, J. Polzin
            </div>
            <div className="uk-text-center">
                &nbsp;
            </div>
             <div className="uk-text-right">
                {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                + ' ' + today.getHours() + ':' + minutes_with_leading_zeros(today)}
            </div>
        </div>
    );
}

export default Footer;
