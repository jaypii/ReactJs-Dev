import React, {Component} from 'react';
import axios from 'axios';

import Button from './components/Button';
import Contacts from './components/Contacts';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageURL: '',
    }
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
  
  reloadHandler = () => {
    window.location.reload();
  }

  render () {
    const { imageURL } = this.state;

    return (
      <div>
        <div className="card p-2 mt-2 bg-light">
          <h1 className="display-3">Hello, Dog!</h1>
          <div className="card-body">
            <p className="lead">This is an example of consuming a REST Service a simple component for randomly show dog images.</p>
            <Button />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card mt-3">
              <div className="card-body">
                <img src = {imageURL} width="500" alt="Dog"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;