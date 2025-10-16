import React from 'react';
import './AdminContent.css';
import { useNavigate } from 'react-router-dom';

const AdminContent = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="admin-content-container">
        <div onClick={() => navigate("/CategoryList")} className="manage-cards">
            <p>Manage Categories</p>
        </div>
        <div onClick={() => navigate("/ProductsList")} className="manage-cards">
            <p>Manage Products</p>
        </div>
      </div>
    </>
  )
}

export default AdminContent
