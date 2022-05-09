import React from 'react';
import Footer from '../components/Footer';

const Stuff02 = () => {
   return (
      <div>
         <div className="card p-2 bg-light mb-2">
            <h1 className="display-5">React UI Components</h1>
            <p className="lead">This is an app using routing and jqWidgets.</p>
         </div>
         <div className="row mt-2">
            <div className="col">
              Component 1
            </div>
            <div className="col">
               Component 2
            </div>
         </div>
         <hr />
         <div className="row mt-2 p-2">
            <div className="col-md-12">
               <p className="text-center">Component 3</p>
            </div>
         </div>
         <Footer />
      </div>
  );
}

export default Stuff02