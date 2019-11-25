import React, { Component } from "react";

import Clock from '../components/clock';
import Toggle from '../components/toggle';
import LoginControl from '../components/loginctl';

class Stuff extends Component {
  render() {
    return (
        <div className="uk-container">
            <h3>Stuff</h3>
            <hr/>
            <div className="uk-child-width-1-4@s uk-grid-small uk-grid">
                <div>
                    <div className="uk-card uk-card-default uk-card-body">
                        <h4 className="uk-card-title">Simple List</h4>
                        <ul className="uk-list uk-list-divider">
                            <li>Nulla pulvinar diam</li>
                            <li>Facilisis bibendum</li>
                            <li>Vestibulum vulputate</li>
                            <li>Eget erat</li>
                            <li>Id porttitor</li>
                        </ul>
                    </div>
                </div>
                <div className="uk-width-expand@m">
                    <div className="uk-card uk-card-small uk-card-default uk-card-body">
                    <table class="uk-table uk-table-divider uk-table-striped">
                        <thead>
                        <tr>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                            <th>Table Heading</th>
                        </tr>
                    </thead>
                        <tbody>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                        <tr>
                            <td>Table Data</td>
                            <td>Table Data</td>
                            <td>Table Data</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                </div>
                <div>
                    <div>
                        <div className="uk-card uk-card-small uk-card-default uk-card-body">
                            <h4 className="uk-card-title">Clock Component</h4>
                            <Clock />
                        </div>
                        <div className="uk-card uk-card-small uk-card-default uk-card-body uk-margin-top" >
                            <h4 className="uk-card-title">Toggle Button</h4>
                            <Toggle />
                        </div>
                        <div className="uk-card uk-card-small uk-card-default uk-card-body uk-margin-top">
                            <h4 className="card-title">Login Control</h4>
                            <LoginControl />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
   
export default Stuff;