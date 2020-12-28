import React, { Component } from 'react';

import NameForm from './components/NameForm';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';
import Calculator from './components/Calculator';
import SignUpDialog from './components/SignUpDialog';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

  render() {
    return (
      // Your JSX code goes here.
      <div className="container">
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
        <div className="row">
          <div className="col">
            <br/>
            <h1>My Todos</h1>
            {this.state.todos.map((todo) => (
            <div className="card mt-1 bg-light">
              <div className="card-body">
                <h5 className="card-title">{todo.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  { todo.completed &&
                  <span>
                    Completed
                  </span>
                  }
                  { !todo.completed &&
                    <span>
                      Pending
                    </span>
                  }              
                </h6>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App;