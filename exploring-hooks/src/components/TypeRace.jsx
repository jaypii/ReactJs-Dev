import React, { useState } from 'react';

export default function TypeRace() {
   const SNIPPETS = [
      'Bears, beets, battlestar galactica',
      "What's Forrest Gump's password? 1Forrest1",
      'Where do programmers like to hangout? The Foo Bar',
      'Lorem ipsum dolor sit amet & other text to type'
   ];


   const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null }
   
   // set States with useState Hook
   const [snippet, setSnippet] = useState('');
   const [userText, setUserText] = useState('');
   const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

   const chooseSnippet = snippetIndex => () => {
      console.log('setSnippet', snippetIndex);
      setSnippet(SNIPPETS[snippetIndex]);
      setGameState({...gameState, startTime: new Date().getTime()});
   };

   const updateUserText = event => {
      setUserText(event.target.value);
      console.log('current userText', userText);
      if (event.target.value === snippet) {
         setGameState({
           ...gameState,
           victory: true,
           endTime: new Date().getTime() - gameState.startTime
         });
      }
   };

   return(
      <div>
         <h6>Select Text by button and type in the following text ...</h6>
         <p>{snippet}</p>
         <input type="text" className="form-control" value={userText} onChange={updateUserText} />
         <div className="alert alert-info mt-2">
            {gameState.victory ? `Done! 🎉 Typing Time: ${gameState.endTime/1000}s` : null}
         </div>
         <hr />
         {
            SNIPPETS.map((SNIPPET, index) => (
               <button className="btn btn-outline-dark btn-sm mr-1" onClick={chooseSnippet(index)} key={index}>
                  {SNIPPET.substring(0, 10)}...
               </button>
           ))
         }
      </div>
   );
}