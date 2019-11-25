import React from "react";
import useFetch from '../hooks/useFetch';

export default function DataLoader(props) {
   const data = useFetch('https://api.github.com/users/jaypii');

   return (
      <div className="card mt-2 p-2">
         <h5>Loading data from github.</h5>
         <div className="card-body">
            <ul className="list-group">
            {[data].map(el => (
               <li className="list-group-item" key={el.id}>
                  <div className="d-flex flex-row">
                     <div className="p-2">
                        <img src={el.avatar_url} alt="URL" width="80"/>
                     </div>
                     <div className="p-2">
                        <h4>{el.name}</h4>
                        {el.location}
                     </div>
                     <div className="p-2">
                        <div className="alert alert-info">{el.bio}</div>
                     </div>
                  </div>
                  <hr/>
               </li>
            ))}
         </ul>
         </div>
      </div>
   );
 }