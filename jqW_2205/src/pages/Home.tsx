import React from 'react';

import Footer from '../components/Footer';
import BarGauge from '../components/BarGauge';
import GridComp from '../components/GridComp';

const Home = () => {
   return (
      <div>
         <div className="card p-2 bg-light">
            <h1 className="display-5">React UI Components</h1>
            <p className="lead">This is an app using routing and jqWidgets.</p>
         </div>
         <div className="row mt-2">
            <div className="col-md-4">
              <BarGauge />
            </div>
            <div className="col-md-8">
               <GridComp />
            </div>
         </div>
         <Footer />
      </div> 
  );
}

export default Home