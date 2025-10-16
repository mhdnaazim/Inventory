import React, { useEffect, useState } from 'react';
import './Categories.css';
import axios from 'axios';
import AdminNav from './AdminNav';
import edit from '../../assets/edit.png';
import bin from '../../assets/bin.png';
import { useNavigate, useParams } from 'react-router-dom';

const Categories = () => {
    const [cat, setCat] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCategories()
    }, [])

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:8000/categories");
            setCat(response.data)
            console.log(response.data);
            
        } catch (error) {
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8000/delcategories/${id}`);
            if (response.status == 200) {
                alert("Category Deleted");
                fetchCategories()
            }
        } catch (error) {
            alert("Deletion Error");
        }
    }

    const handleEdit = (id) => {
        navigate(`/EditCategory/${id}`);
    }

    return (
        <>
            <AdminNav />
            <div className="categories-container">
                <h2>CATEGORIES</h2>
                <table className="cat-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cat.map((item) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td className='action-col'>
                                        <div className="table-images">
                                            <img onClick={() => handleEdit(item.id)} src={edit} />
                                            <img onClick={() => handleDelete(item.id)} src={bin} />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={() => navigate("/AddCategory")}>ADD CATEGORY</button>
            </div>
        </>
    )
}

export default Categories
