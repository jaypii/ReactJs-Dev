import React from 'react';

import Footer from '../components/Footer';
import BarGauge from '../components/BarGauge';
import Counter from '../components/Counter';
import Chart from '../components/Chart';

const Stuff01 = () => {
   return (
      <div>
         <div className="jumbotron">
            <h1 className="display-4">React UI Components</h1>
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
         <div className="row mt-2">
            <div className="col">
               <Chart />
            </div>
         </div>
         <Footer />
      </div>
  );
}

export default Stuff01