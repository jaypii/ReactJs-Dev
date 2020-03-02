import React from 'react';
import { Provider, connect } from 'react-redux';
import { store} from './redux/store';
import Layout from '../components/layout';

export class App extends React.Component{
  
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={store}>
        <Layout className="container">
          <p>Hello</p>
        </Layout>
      </Provider>
    );
  }
}

// This is how we connect current component with the store
export default connect(
    mapStateToProps, 
    // provide redux store data to App component
    mapDispachToProps 
    // can use to dispatch actions from app component to redux store
)(App)