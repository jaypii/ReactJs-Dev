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
      <li key={product._id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </li>
    );
  };

  return (
    <div>
      <h3>Product List</h3>
      <div className="uk-card uk-card-small uk-card-default">
          <div className="uk-card-body">
            <ul className="uk-list uk-list-divider">
            {(products && products.length > 0) ? (
              products.map(product => renderProduct(product))
            ) : (
              <p>No products found</p>
            )}
          </ul>
          </div>
        </div>
    </div>
    );
}

export default App;