import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductPage from './components/pages/ProductPage';
import ProductManagementPage from './components/pages/ProductManagementPage';
import productsData from './data/products.json'; 


const App = () => {
  const [products, setProducts] = useState(productsData);

  const addProduct = (newProduct) => {
    newProduct.id = products.length + 1; // Simple ID assignment
    setProducts([...products, newProduct]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage products={products} />} exact />
        <Route path="/product/:productId" element={<ProductPage products={products} />} />
        <Route path="/manage-product" element={<ProductManagementPage addProduct={addProduct} />} />
      </Routes>
    </Router>
  );
};

export default App;
