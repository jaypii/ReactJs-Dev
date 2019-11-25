import React, { useState } from 'react';

export default function JustAnotherCounter() {
   const [count, setCount] = useState(0);
 
   return (
      <div>
         <h2 className="text-center">{count}</h2>
         <hr/>
         <p className="d-flex justify-content-start">
         <button className="btn btn-success btn-sm mr-3" onClick={() => setCount(count + 1)}>&nbsp;+&nbsp;</button>
         <button className="btn btn-info btn-sm mr-3" onClick={() => setCount(count - 1)}>&nbsp;-&nbsp;</button><br/><br/>  
         <button className="btn btn-warning btn-sm" onClick={() => setCount(0)}>&nbsp;Reset&nbsp;</button>
         </p>
      </div>
   );
 }