import React, { useState } from 'react';
import './EditCat.css';
import AdminNav from './AdminNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddCat = () => {

  const navigate = useNavigate();
  const [addCat, setAddCat] = useState({
    name: ""
  })

  const handleChange = (e) => {
    const {name , value} = e.target;
    setAddCat((prev) => ({...prev, [name] : value}))
  }

  const handleSave = async () => {
    try {
      const response = await axios.post("http://localhost:8000/addcategory", addCat);
      console.log(response);
      navigate("/CategoryList");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <AdminNav />
      <div className="edit-cat-main">
        <div className="edit-inputs">
          <p>ADD CATEGORY</p>
          <input onChange={handleChange} name='name' value={addCat.name} type="text" placeholder='Name' />
          <button onClick={handleSave} className='save-btn'>Save</button>
        </div>
      </div>
    </>
  )
}

export default AddCat;
