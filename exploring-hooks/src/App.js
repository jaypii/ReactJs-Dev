import React from 'react';
//import logo from './logo.svg';
import Footer from './components/Footer';

import DLoader from './components/DataLoader';
import JACounter from './components/JustAnotherCounter';
import TypeRace from './components/TypeRace';
import Clock from './components/Clock';
import Timer from './components/Timer';
import SimpleCounter from './components/Counter';

function App() {
  return (
    <div>
      <h2>Hook Examples</h2>
      <DLoader />
      <div className="row mt-2">
        <div className="col-md-3">
          <div className="card p-2">
            <h5 className="card-title text-center">Counter Component</h5>
            <JACounter />
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-2">
            <h5 className="card-title text-center">Type Race Component</h5>
            <TypeRace /> 
          </div>
        </div>
        <div className="col-md-3">
          <div className="card p-2">
            <h5 className="card-title text-center">Clock Component</h5>
            <Clock />
          </div>
          <div className="card p-2 mt-2">
            <h5 className="card-title text-center">Timer Component</h5>
            <Timer />
          </div>
          <div className="card p-2 mt-2">
            <h5 className="card-title text-center">Simple Counter</h5>
            <SimpleCounter />
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col">
          <div className="card p-2">
            <h5 className="card-title text-center">Empty Component</h5> 
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <h5 className="card-title text-center">Empty Component</h5>
          </div>
        </div>
        <div className="col">
          <div className="card p-2">
            <h5 className="card-title text-center">Empty Component</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
