import React, { useState } from 'react';
import './CheckoutPage.css';
import { toast } from 'react-toastify';
import UserNav from './UserNav';

const CheckoutPage = () => {

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
                        <input type="text" placeholder="" />
                    </div>

                    <div className="input-group">
                        <label>Address</label>
                        <input type="text" placeholder="" />
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>City</label>
                            <input type="text" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label>PIN</label>
                            <input type="text" placeholder="" />
                        </div>
                    </div>

                    <div className="input-group">
                        <label> Select Payment Method </label>
                        <select name="" id="">
                            <option value="">UPI</option>
                            <option value="">Net Banking</option>
                            <option value="">Cash on Delivery</option>
                        </select>
                    </div>

                    <div className="checkout-summary">
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹499.00</span>
                        </div>
                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>₹40.00</span>
                        </div>
                        <div className="summary-total">
                            <span>Total</span>
                            <span>₹539.00</span>
                        </div>
                    </div>

                    <button className="pay-btn">Confirm Payment</button>
                </div>
            </div>

        </>
    );
}

export default CheckoutPage
