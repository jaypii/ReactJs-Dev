
import React, { Component } from "react";

const today = new Date();

class Footer extends Component {
    render() {
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
                    + ' ' + today.getHours() + ':' + today.getMinutes()}
                </div>
            </div>
        );
    }
}

export default Footer;
