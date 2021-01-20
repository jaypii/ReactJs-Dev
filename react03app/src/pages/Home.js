import React from 'react';

import Clock from '../components/clock';

const Home = () => (
  <div>
    {/* Application info */}
    <div className="jumbotron bg-info text-white text-center">
      <h1 className="display-5">Welcome to my first React Website!</h1>
      <p className="lead">React with Routing</p>
    </div>
    {/* First Row 1 column */}
    <div className="row">
      <div className="col">
        <h3>Home</h3>
      </div>
    </div>
    {/* Second Row 4 columns */}
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <div className="card-header">Component: Running Clock</div>
          <div className="card-body">
            <Clock />
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card bg-success text-white text-center p-1">
          col 2 
        </div>
      </div>
      <div className="col">
        <div className="card bg-primary text-white text-center p-1">
          col 3
        </div>
      </div>
      <div className="col">
        <div className="card bg-warning text-white text-center p-1">
          col 4
        </div>
      </div>
    </div>
    {/* Third Row 3 columns */}
    <div className="row mt-3">
      <div className="col">
        <div className="card">
          <div className="card-header"> Component 1</div>
            &nbsp;
          </div>
        </div>
      <div className="col">
        <div className="card">
          <div className="card-header">Component 2</div>
          <div className="card-body">
            Empty card
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
)

export default Home