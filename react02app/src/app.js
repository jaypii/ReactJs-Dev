import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JqxDateTimeInput from './jqwidgets-react/react_jqxdatetimeinput';

import Gauge from './components/gauge';
import Datatable from './components/datatable';
import TopNav from './components/topnav';
import Clock from './components/clock';
import Toggle from './components/toggle';

class App extends Component {
  render() {
    return (
      <div class="container" style={{ marginTop: 4.5 + 'rem'}}>
        <TopNav />
        <Header />
        <div class="row">
          <div class="col">
            <Gauge />
          </div>
          <div class="col">
            <Clock />
            <div class="card mt-2">
              <h5 class="card-header bg-info text-white">Date Input</h5>
              <div class="card-body">
                <JqxDateTimeInput />
              </div>
            </div>
            <div class="card mt-2">
              <h5 class="card-header bg-info text-white">Toggle Button</h5>
              <div class="card-body">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
        <Datatable />
        <Footer />
      </div>
    );
  }
}

class Header extends React.Component {
  render(){
    return(
      <div class="card mt-2 bg-info text-white text-center p-2">
        <h1 class="display-5">jQWidgets React App</h1>
      </div>
    );
  }
};

const today = new Date();

function minutes_with_leading_zeros(dt) { 
  return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
};

class Footer extends React.Component {
  render() {
      return(
      <div class="card mt-3 bg-info text-white">
        <div class="card-body">
          <div class="row">
            <div class="col">
              &copy; 2019, J. Polzin
            </div>
            <div class="col">
              &nbsp;
            </div>
            <div className="col text-right">
                {today.getDate() + '.' + (today.getMonth()+1) + '.' + today.getFullYear() 
                + ' ' + today.getHours() + ':' + minutes_with_leading_zeros(today)}
            </div>
          </div>
        </div>
      </div>  
    )
  };
};

export default App;