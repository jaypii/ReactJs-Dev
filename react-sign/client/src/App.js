import React, { useState, useEffect } from "react";

// SERVICES
import productService from './services/productService';

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <div className="uk-padding-small uk-card uk-card-default uk-card-body" key={product._id}>
        <h4>{product.name}</h4>
        {product.description}
      </div>
    );
  };

  return (
    <div className="uk-container">
      <h2>Product List</h2>
      <hr/>
      <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match uk-grid">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
    );
}

export default App;