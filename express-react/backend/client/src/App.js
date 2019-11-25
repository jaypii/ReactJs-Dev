import React, {Component} from 'react';
//import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users:[]
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
      axios.get('/users')
    .then(data => {
      console.log(data.data.users);
      this.setState({users: data.data.users});
    })
    // .then(({response}) => this.setState({users: response.users}))
    .catch(error => console.log(error));
  }

  showUsers = user => (
    <tr key={user.id}>
      <td><img src={user.imgUrl} className="rounded-circle" style={{width: 30}}/></td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.post}</td>
    </tr>
  );
  
  render() {
    const {users} = this.state;
    return(
      <div className="App">
        <div className="card mt-2 ">
          <div className="card-body">
            <table className="table table-striped"  style={{width: 60 + '%'}}>
              <tbody>
                {users.map(this.showUsers)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;