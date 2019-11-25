import React from 'react'
//import Time from 'react-time-format'

// The Header creates links that can be used to navigate
// between routes.
const today = new Date();

const Footer = () => (
    <div class="card mt-3 bg-info text-white">
        <div class="row p-2">
            <div class="col">
                &copy; {today.getFullYear()}, J. Polzin
            </div>
            <div class="col">&nbsp;</div>
            <div class="col text-right">
                {/* Todays date */}
                {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                    + ' ' + today.getHours() + ':' + today.getMinutes()}
            </div>
        </div>
    </div>
)

export default Footer