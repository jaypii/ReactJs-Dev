import React, { useEffect, useState} from 'react';

const API ='https://jsonplaceholder.typicode.com/posts';

const EffectHook = () => {
   const [error, setError] = useState(false);
   const [loading, setLoading] = useState(true);
   const [posts, setPosts] = useState([]);
   
   useEffect(() => {
      const execute = async () => {
         try {
            const response = await window.fetch(API);
            const json = await response.json();
            setPosts(json);
            setLoading(false);
         } catch (err) {
            setError(true);
            setLoading(false);
         }
      };
      execute();
   }, []);

   if (loading) {
      return <div>Loading...</div>;
   }

   if (error) {
      return <div>Error!</div>;
   }

   return (
      <div className="card p-2">
         <h5 className="bg-light">Effect Hook component</h5>
         <ul className="list-group">
            <li className="list-group-item">
               {posts.map(post => <p id={post.id}>{post.id}: {post.title}</p>)}
            </li>
         </ul>
      </div>
   );
}

export default EffectHook;