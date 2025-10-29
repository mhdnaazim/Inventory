import React, { useState } from 'react';
import './CheckoutPage.css';
import { toast } from 'react-toastify';
import UserNav from './UserNav';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {

    const location = useLocation();
    const { total } = location.state || { total:0 }

    const [formData, setFormData] = useState({
        name: "",
        address: "",
        city: "",
        pincode: "",
        paymentMethod: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        console.log(formData, "Success");
        toast.success("Order Placed Succesffuly")
    }

    return (
        <>
            <UserNav />

            <div className="checkoutPage-Container">
                <div className="checkout-card">
                    <h2>Checkout</h2>

                    <div className="input-group">
                        <label>Full Name</label>
                        <input type="text" value={formData.name} name='name' onChange={handleChange} />
                    </div>

                    <div className="input-group">
                        <label>Address</label>
                        <input type="text" value={formData.address} name='address' onChange={handleChange} />
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>City</label>
                            <input type="text" value={formData.city} name='city' onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>PIN</label>
                            <input type="text" value={formData.pincode} name='pincode' onChange={handleChange} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label> Select Payment Method </label>
                        <select name='paymentMethod' id="" value={formData.paymentMethod} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="UPI">UPI</option>
                            <option value="Net Banking">Net Banking</option>
                            <option value="COD">Cash on Delivery</option>
                        </select>
                    </div>

                    <div className="checkout-summary">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{total}</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>₹40.00</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>₹{total + 40}</span>
                        </div>
                    </div>

                    <button className="pay-btn" onClick={handleSubmit}>Confirm Payment</button>
                </div>
            </div>

        </>
    );
}

export default CheckoutPage
