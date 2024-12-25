import React, { useState } from 'react';
import './ProductList.css';

function ProductList() {
  const [products] = useState([
    {
      id: 1,
      title: 'Wireless Headphones',
      price: 1999,
      image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097'
    },
    {
      id: 2,
      title: 'Smart Watch',
      price: 2999,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      title: 'Bluetooth Speaker',
      price: 1499,
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      title: 'Gaming Mouse',
      price: 999,
      image: 'https://via.placeholder.com/150'
    }
  ]);

  return (
    <div className="product-list">
      <h2>Dynamic Product List</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
