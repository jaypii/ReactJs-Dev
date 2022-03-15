import React from 'react';
import Button from '../components/Button';
import Footer from '../components/Footer';
import FriendStatus from '../components/FriendStatus';


const Home = () => {
  return (
    <div>
      <div className="card p-2 bg-light">
        <h1 className="display-5">Exploring Hooks</h1>
        <p className="lead">This is a simple app, using <i>React Hooks</i>.</p>
        <Button />
      </div>
      <Footer />
    </div>
  );
}

export default Home