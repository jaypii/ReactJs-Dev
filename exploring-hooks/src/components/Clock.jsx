import React, { useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
// ***** Simple Clock component with hooks *****

const Clock = (props) => {
    const [date,setDate] = useState(new Date());

    useEffect(() => {
        let timerID = setInterval( () => tick(), 1000 );

        return function cleanup() {
            clearInterval(timerID);
        }
    });

    function tick() {
        setDate(new Date());
    };

    return (
        <div>
            <h3 className="text-center">{date.toLocaleTimeString()}</h3>
        </div>
    );
}

export default Clock;