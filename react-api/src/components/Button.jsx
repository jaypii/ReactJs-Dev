import React, { useState } from "react";

function handleClick () {
   //alert('Button clicked!');
   window.location.reload();
};

export default function Button() {
   const [buttonText, setButtonText] = useState("Refresh");
   
   return (
      <div>
         <button className="btn btn-sm btn-primary" onClick={handleClick}>
            {buttonText}
         </button>
      </div>
   );
}