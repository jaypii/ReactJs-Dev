import React from 'react';
import BarGauge from '../components/BarGauge';
import Counter from '../components/Counter'

const Home = () => {
   return (
      <div>
         <div className="card p-2 bg-light">
            <h1 className="display-5">React UI Components</h1>
            <p className="lead">This is an app using routing and jqWidgets.</p>
         </div>
         <div className="row mt-2">
            <div className="col">
               <BarGauge />
            </div>
            <div className="col">
               <Counter />
            </div>
         </div>
      </div>
  );
}

export default Home