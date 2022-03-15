import React, { useEffect, useState} from 'react';

function FriendStatus(props) {
   const [isOnline, setIsOnline] = useState(null);

   useEffect(()=> {
      function handleStatusChange(status) {
         setIsOnline(status.isOnline);
      }
      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
      return function cleanup() {
         ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
   });

   if (isOnline === null) {
      return <div>Loading...</div>;
   }
   return isOnline ? 'Online' : 'Offline'
}

export default FriendStatus;