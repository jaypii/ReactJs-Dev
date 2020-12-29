import React, { Component } from 'react';

import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import Calculator from './components/Calculator';
import SignUpDialog from './components/SignUpDialog';

class App extends Component {
  render() {
    return (
      // Your JSX code goes here.
      <div className="container mt-3">
        <h2>Using simple components</h2>
        <div className="row row-cols-2">
          <div className="col">
            <div className="card mt-1 p-2">
              <EssayForm />
            </div>
          </div>
          <div className="col">
            <div className="card mt-1 p-2">
              <FlavorForm />
            </div>
          </div>
          <div className="col">
            <div className="card mt-1 p-2">
              <NameForm />
            </div>
          </div>
        </div>
        <div className="row row-cols-2">
          <div className="col">
            <div className="card mt-1 p-2">
              <Calculator />
            </div>
          </div>
          <div className="col">
            <div className="card mt-1 p-2">
              <SignUpDialog />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;