import React, { useState } from "react";

export default function Button() {
   const [buttonText, setButtonText] = useState("Click me, please");

   return (
      <div>
         <button className="btn btn-primary" onClick={() => setButtonText("Thanks, been clicked!")}>
            {buttonText}
         </button>
      </div>
   );
}