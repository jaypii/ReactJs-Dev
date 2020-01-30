import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Route, Router} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Card} from 'react-bootstrap';
import Counter from './components/Counter';
import Clock from './components/Clock';
import Header from './components/Header';
import Footer from './components/Footer';

const initialState = {
   count: 0
};

// reducer.js
function reducer(state = initialState, action) {
   switch(action.type) {
      case 'INCREMENT':
         return {
            count: state.count + 1
         };
      case 'DECREMENT':
         return {
            count: state.count - 1
         };
      case 'RESET':
         return {
            count: 0
         };
      default:
         return state;
   }
}

const store = createStore(reducer);

const App = () => (
   <Provider store={store}>
      <Header />
      <Container>
         <Row>
         <Col>
            <Card className="p-2">
            <h5>Standard component</h5>
               <Clock />
            </Card>
         </Col>
         <Col>
            <Counter />
         </Col>
         <Col>Last column</Col>
      </Row>
      </Container>
      <Footer />
   </Provider>
);

render(<App />, document.getElementById('root'));