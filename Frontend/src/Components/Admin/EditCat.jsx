import React, { useEffect, useState } from 'react';
import './EditCat.css';
import AdminNav from './AdminNav';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditCat = () => {

  const [updatedUser, setUpdatedUser] = useState({
    name: ""
  })

  const { id } = useParams();
  const navigate = useNavigate()

  const handlefetchUserDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/editcategories/${id}`);
      console.log(response);

      setUpdatedUser({
        name: response.data[0].name
      });

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handlefetchUserDetails()
  }, []);

  const handleSave = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/categories/${id}`, updatedUser);
      console.log(response);

      if (response.status == 200) {
        alert("Category Updated Successfully");
        navigate("/CategoryList");
      } else {
        alert("Error while updating Category");
      }

    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <AdminNav />
      <div className="edit-cat-main">
        <div className="edit-inputs">
          <p>EDIT CATEGORY</p>
          <input onChange={handleChange} value={updatedUser.name} name='name' type="text" placeholder='Name' />
          <button onClick={handleSave} className='save-btn'>Save Changes</button>
        </div>
      </div>
    </>
  )
}

export default EditCat;
