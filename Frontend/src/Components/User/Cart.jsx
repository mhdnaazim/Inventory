import React, { useEffect, useState } from 'react';
import './Cart.css';
import UserNav from './UserNav';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const navigate = useNavigate()
    const cartItem = JSON.parse(localStorage.getItem("Cart")) || [];
    const [cart, setCart] = useState(cartItem);

    useEffect(() => {
        localStorage.setItem("Cart", JSON.stringify(cart));
    }, [cart]);

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
            prevCart
                .map(citem =>
                    citem.id === id
                        ? { ...citem, quantity: citem.quantity - 1 }
                        : citem
                )
                .filter(citem => citem.quantity > 0)
        );
    };

    const clearCart = () => {
        setCart([]);
        toast.info("Cart cleared");
    };

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <>
            <UserNav />
            <div className="cart-container">
                <h2 className="cart-title">Cart</h2>

                {cart.length === 0 ? (
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item-card">
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Category: {item.category_name}</p>
                                    
                                    <p>Price: ₹{item.price}</p>
                                </div>
                                <div className="cart-quantity-control">
                                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                                </div>
                                <div className="cart-item-total">
                                    <h4>₹{item.price * item.quantity}</h4>
                                </div>
                            </div>
                        ))}
                        <div className="cart-summary">
                            <h3>Total: ₹{totalPrice}</h3>
                            <div className="cart-buttons">
                                <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
                                <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
