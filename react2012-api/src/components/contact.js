import React from 'react'

const Contacts = ({ contacts }) => {
   return (
      <div>
         <h1>Contact List</h1>
         {contacts.map((contact) => (
            <div class="card mt-2 w-75 p-1">
               <div class="d-flex justify-content-between">
                  <p><strong>{contact.name}</strong></p>
                  <p class="text-muted">{contact.email}</p>
                  <p><i>{contact.company.catchPhrase}</i></p>
               </div>
            </div>
         ))}
      </div>
   )
};

export default Contacts