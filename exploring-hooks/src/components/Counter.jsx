import React, { useState } from 'react';

const SimpleCounter = () => {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
 
  return (
    <div className="mt-2">
      <p className="text-center">
        <span className="lead">You clicked {count} times</span><br />
        <button className="btn btn-primary mt-2" onClick={incrementCount}>Click Me</button>
      </p>
    </div>
  )
}

export default SimpleCounter;