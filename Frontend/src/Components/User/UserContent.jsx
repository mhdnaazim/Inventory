import React, { useEffect, useState } from 'react';
import './UserContent.css';
import axios from 'axios';

const UserContent = () => {

  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    } catch (error) {
    }
  }

  useEffect(() => {
    fetchProducts()
  }, []);

  return (
    <>
      <div className="user-content-main">
        <div className="products-container">
          {products.length < 1 ? (
          null
        ) : (
          products.map((item) => {
          return (
            <div className="product-card">
              <p>{item.name}</p>
              <h4>{item.category_name}</h4>
              <h4>Quantity: {item.quantity}</h4>
              <h3>Rs.{item.price}</h3>
            </div>
          )
        })
        )}
        </div>
      </div>
    </>
  )
}

export default UserContent;
