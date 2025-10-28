import React, { useState } from 'react';
import './Cart.css';
import UserNav from './UserNav';

const Cart = () => {

    const [ cart, setCart ] = useState([]);

    const clearCart = () => setCart([])

    return (
        <>
            <UserNav />
            <div className="cart">

            </div>
        </>
    )
}

export default Cart;
