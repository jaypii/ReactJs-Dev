import React from 'react';
import Button from '../components/Button';


const Home = () => {
  return (
    <div>
      <h2>Homepage</h2>
      <div className="jumbotron">
      <h1 className="display-4">Exploring Hooks</h1>
      <p className="lead">This is a simple app, using <i>React Hooks</i>.</p>
      <Button />
    </div>
    </div>
  );
}

export default Home