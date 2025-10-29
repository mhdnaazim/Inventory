import React, { useEffect, useState } from 'react';
import './UserContent.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const UserContent = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
    } catch (error) {
    }
  }
  
  const cartItem = JSON.parse(localStorage.getItem("Cart")) || [];
  const [cart, setCart] = useState(cartItem);
  console.log(cart);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("Cart", JSON.stringify(cart));
  }, [cart])

  

  const addToCart = (item) => {
    const existingItem = cart.find(citem => citem.id === item.id);

    if (existingItem) {
      setCart(prevCart => prevCart.map(citem => citem.id === item.id ? { ...citem, quantity: citem.quantity + 1 } : citem));
    } else {
      setCart(prevCart => [...prevCart, { ...item, quantity: 1 }]);
    }
  }

  const increaseQuantity = (id) => {
  setCart(prevCart =>
    prevCart.map(citem =>
      citem.id === id
        ? { ...citem, quantity: citem.quantity + 1 }
        : citem
    )
  );
};


  const decreaseQuantity = (id) => {
    setCart(prevCart =>
      prevCart.map(citem =>
          citem.id === id
            ? { ...citem, quantity: citem.quantity - 1 }
            : citem
        )
        .filter(citem => citem.quantity > 0)
    );
  }

  return (
    <>
      <div className="user-content-main">
        <div className="products-container">
          {products.length < 1 ? (
            null
          ) : (
            products.map((item) => {
              const inCart = cart.find(cartItem => cartItem.id === item.id)
              return (
                <div className="product-card">
                  <p>{item.name}</p>
                  <h4>Category: {item.category_name}</h4>
                  <h4>Quantity: {item.quantity}</h4>
                  <h3>₹{item.price}</h3>
                  {inCart ? (
                    <div className="quantity-buttons">
                      <button className='quantity-btn' onClick={() => decreaseQuantity(item.id)}>-</button>
                      <h6>{inCart.quantity}</h6>
                      <button className='quantity-btn' onClick={() => increaseQuantity(item.id)}>+</button>
                      
                    </div>
                  ) : (
                    <button onClick={() => {
                      addToCart(item);
                      toast.success("Item Added Successfully")
                    }}>Add to Cart</button>
                  )}
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
