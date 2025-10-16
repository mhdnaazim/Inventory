import React, { useState } from 'react';
import './EditCat.css';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const AddProduct = () => {

    const navigate = useNavigate();
    const [categories, setCategories] = useState([])
    const [addProduct, setAddProduct] = useState({
        name: "",
        category_id: "",
        quantity: "",
        price: ""
    })

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8000/categories");
            setCategories(response.data)
            console.log(response.data);
        } catch (error) {
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddProduct((prev) => ({ ...prev, [name]: value }))
    }

    const handleSave = async () => {
        try {
            const response = await axios.post("http://localhost:8000/addProducts", addProduct);
            console.log(response);
            navigate("/ProductsList");
        } catch (error) {
            console.log(error);
            alert(error);
        }
    }

    return (
        <>
            <AdminNav />
            <div className="edit-cat-main">
                <div className="edit-inputs">
                    <p>ADD PRODUCT</p>
                    <input type="text" onChange={handleChange} name='name' value={addProduct.name} placeholder='Name' />
                    <select onChange={handleChange} name="category_id" value={addProduct.category_id}>
                                <option>Select Category</option>

                        {categories.map((item) => {
                            return (
                                <option value={item.id}>{item.name}</option>
                            )
                        })}
                    </select>
                    <input type="text" onChange={handleChange} name='quantity' value={addProduct.quantity} placeholder='Quantity' />
                    <input type="text" onChange={handleChange} name='price' value={addProduct.price} placeholder='Price' />

                    <button onClick={handleSave} className='save-btn'>Save</button>
                </div>
            </div>

        </>
    )
}

export default AddProduct


