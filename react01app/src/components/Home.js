import React from 'react'
import Clock from './clock';
import Toggle from './toggle';
import MouseTracker from './mousetracker';

const Home = () => (
  <div>
    <div class="jumbotron bg-info text-white text-center">
      <h1 class="display-5">Welcome to my first React Website!</h1>
      <p class="lead">React with Routing</p>
    </div>
    {/* First Row 1 column */}
    <div class="row">
      <div class="col">
        <h3>Home</h3>
      </div>
    </div>
    {/* Second Row 4 columns */}
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-header">Component: Clock</div>
          <div class="card-body">
            <Clock />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card bg-success text-white text-center p-1">
          col 2 
        </div>
      </div>
      <div class="col">
        <div class="card bg-primary text-white text-center p-1">
          col 3
        </div>
      </div>
      <div class="col">
        <div class="card bg-warning text-white text-center p-1">
          col 4
        </div>
      </div>
    </div>
    {/* Third Row 3 columns */}
    <div class="row mt-3">
      <div class="col">
        <div class="card">
          <div class="card-header"> Component: Mouse Tracker</div>
            <MouseTracker />
          </div>
        </div>
      <div class="col">
        <div class="card">
          <div class="card-header">Component: Toggle button</div>
          <div class="card-body">
            <Toggle />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          &nbsp;
        </div>
      </div>
    </div>
  </div>
)

export default Home