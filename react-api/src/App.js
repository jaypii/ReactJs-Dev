import React, {Component} from 'react';
//import Contacts from './components/contacts';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
  }

  render () {
    const { imageURL } = this.state;
    return (
      <div className="card mt-3">
        <div className="card-body">
          <img src = {imageURL} width="50%"/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then(response => {
      this.setState({ imageURL: response.data.message });
      //console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export default App;