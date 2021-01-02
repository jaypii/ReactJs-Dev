import React, {Component} from 'react';
import Contacts from './components/contact';

class App extends Component {

  state = {
    contacts: []
  }

  componentDidMount() {
    const apiUrl = 'http://jsonplaceholder.typicode.com/users';
    fetch(apiUrl)
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }

  render () {
    return (
      <div className="container-fluid">
        <Contacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;