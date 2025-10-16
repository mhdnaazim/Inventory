import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Categories.css'
import AdminNav from './AdminNav';
import edit from '../../assets/edit.png';
import bin from '../../assets/bin.png';


const Products = () => {

  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  // Fetching products
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
``
  useEffect(() => {
    fetchProducts();
  }, [])

  const handleEdit = (id) => {
    navigate(`/EditProduct/${id}`)
  }

  // Delete Products
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delproduct/${id}`);
      if (response.status == 200) {
        alert("Product Deleted");
        fetchProducts()
      }
    } catch (error) {
      alert("Deletion Error")
    }
  }

  return (
    <>
      <AdminNav />
      <div className="categories-container">
        <h2>PRODUCTS</h2>
        <table className="cat-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length < 1 ? (
              null
            ) : (
              products.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.category_name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td className='action-col'>
                      <div className="table-images">
                        <img onClick={() => handleEdit(item.id)} src={edit} />
                        <img onClick={() => handleDelete(item.id)} src={bin} />
                      </div>
                    </td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
        <button onClick={() => navigate("/AddProduct")}>ADD PRODUCT</button>
      </div>
    </>
  )
}

export default Products;
