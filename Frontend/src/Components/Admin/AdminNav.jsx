import React from 'react'
import './AdminNav.css'
import { useNavigate } from 'react-router-dom'

const AdminNav = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className="admin-nav-container">
        <div className="admin-nav-container-left">
            <h3>Admin Dashboard</h3>
        </div>
        <div className="admin-nav-container-right">
            <ul>
                <li onClick={() => navigate("/AdminHome")}>HOME</li>
                <li>LOGOUT</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default AdminNav
