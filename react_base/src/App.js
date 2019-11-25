import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <div className="card mt-3 border-dark">
          <div className="card-body">
            Here comes the content!!!
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;