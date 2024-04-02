// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ products }) => {
  let navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1>Products</h1>
        <button className="btn btn-primary" onClick={() => navigate('/manage-product')}>Manage Products</button>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {products.map((product) => (
          <div className="card m-2" style={{ width: '18rem' }} key={product.id} onClick={() => handleProductClick(product.id)}>
            <img src={product.image_url} className="card-img-top" alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
