import React, { useEffect, useState } from 'react';
import './EditCat.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AdminNav from './AdminNav';

const EditProduct = () => {

    const navigate = useNavigate()
    const [updatedProduct, setUpdatedProduct] = useState({
        name: "",
        category_id: "",
        quantity: "",
        price: ""
    })

    const {id} = useParams();

    const handleFetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/editproduct/${id}`);
            console.log(response);
            setUpdatedProduct({
                name: response.data[0].name,
                category_id: response.data[0].category_id,
                quantity: response.data[0].quantity,
                price: response.data[0].price
            });
            console.log(name);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        handleFetchProduct()
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setUpdatedProduct((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = async () => {
        try {
            const response = await axios.put(`http://localhost:8000/editproduct/${id}`, updatedProduct);
            console.log(response);
            if (response.status == 200) {
                alert("Product Updated Successfully");
                navigate("/ProductsList");
            } else {
                alert("Error Updating User");
            }
        } catch (error) {

        }
    }

    return (
        <>
            <AdminNav />
            <div className="edit-cat-main">
                <div className="edit-inputs">
                    <p>EDIT PRODUCT</p>
                    <input onChange={handleChange} value={updatedProduct.name} name='name' type="text" placeholder='Name' />
                    <input onChange={handleChange} value={updatedProduct.category_id} name='category_id' type="text" placeholder='Category' />
                    <input onChange={handleChange} value={updatedProduct.quantity} name='quantity' type="number" placeholder='Quantity' />
                    <input onChange={handleChange} value={updatedProduct.price} name='price' type="number" placeholder='Price' />

                    <button onClick={handleSave} className='save-btn'>Save Changes</button>
                </div>
            </div>
        </>
    )
}

export default EditProduct
