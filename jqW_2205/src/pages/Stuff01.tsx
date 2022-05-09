import React from 'react';

import Footer from '../components/Footer';

import KnobTest from '../components/KnobTest';
import Slider01 from '../components/Slider01';
import BarChart from '../components/BarChart';

const Stuff01 = () => {
   return (
      <div>
         <div className="card p-2 bg-light mb-2">
            <h1 className="display-5">React UI Components</h1>
            <p className="lead">This is an app using routing and jqWidgets.</p>
         </div>
         <div className="row mt-2">
            <div className="col">
              <KnobTest />
            </div>
            <div className="col">
               <BarChart />
            </div>
         </div>
         <hr />
         <div className="row mt-2 p-2">
            <div className="col-md-12">
               <Slider01 />
            </div>
         </div>
         <Footer />
      </div>
  );
}

export default Stuff01