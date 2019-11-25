import React, { Component } from "react";

import Clock from '../components/clock';
import Toggle from '../components/toggle';
import LoginControl from '../components/loginctl';

class Stuff extends Component {
  render() {
    return (
        <div>
            <h3>Stuff</h3>
            <hr/>
            <div className="row">
                <div className="col-md-3">
                    <div className="card">
                        <h4 className="card-header">Simple List</h4>
                        <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">Nulla pulvinar diam</li>
                            <li className="list-group-item">Facilisis bibendum</li>
                            <li className="list-group-item">Vestibulum vulputate</li>
                            <li className="list-group-item">Eget erat</li>
                            <li className="list-group-item">Id porttitor</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                <div className="card">
                    <h4 className="card-header">Middle area</h4>
                    <div className="card-body">
                        Content?
                    </div>
                </div>
                </div>
                <div className="col-md-3">
                <div className="card">
                    <h4 className="card-header bg-warning text-white">Clock Component</h4>
                    <div className="card-body">
                        <Clock />
                    </div>
                </div>
                <div className="card mt-2">
                    <h4 className="card-header bg-info text-white">Toggle Button</h4>
                    <div className="card-body">
                        <Toggle />
                    </div>
                </div>
                <div className="card mt-2">
                    <h4 className="card-header bg-success text-white">Login Control</h4>
                    <div className="card-body">
                        <LoginControl />
                    </div>
                </div>
            </div>
            {/* End row */}
        </div>
        </div>
    );
  }
}
   
export default Stuff;