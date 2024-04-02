import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = ({ products }) => {
  let { productId } = useParams();
  let navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(productId));

  const imageStyle = {
    maxWidth: '400px', 
    height: 'auto',
    display: 'block', 
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px'
  };

  return (
    <div className="container mt-4">
      <button className="btn btn-secondary mb-3" onClick={() => navigate(-1)}>Back</button>
      {product ? (
        <div className="form-control">
          <img src={product.image_url} alt={product.name} style={imageStyle} />
          <div className="text-center" >
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.currency} {product.price}</p>
            <p>In stock: {product.stock}</p>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductPage;

