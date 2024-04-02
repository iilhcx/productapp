import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const ProductManagementPage = ({ addProduct }) => {
  const initialFormState = {
    name: '',
    description: '',
    price: '',
    currency: 'USD',
    image_url: '',
    stock: '',
  };

  const [product, setProduct] = useState(initialFormState);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price) return; // Basic validation
    addProduct(product);
    setProduct(initialFormState); // Reset form to initial state after submission
    navigate('/'); // Use navigate to redirect to the homepage
  };
  return (
    <div className="container mt-5">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Product Name</label>
          <input type="text" className="form-control" id="name" name="name" value={product.name} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description" name="description" value={product.description} onChange={handleChange}></textarea>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price">Price</label>
          <input type="number" className="form-control" id="price" name="price" value={product.price} onChange={handleChange} required />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="currency">Currency</label>
          <select className="form-control" id="currency" name="currency" value={product.currency} onChange={handleChange}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="image_url">Image URL</label>
          <input type="text" className="form-control" id="image_url" name="image_url" value={product.image_url} onChange={handleChange} />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="stock">Stock</label>
          <input type="number" className="form-control" id="stock" name="stock" value={product.stock} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </div>
  );
};

export default ProductManagementPage;
