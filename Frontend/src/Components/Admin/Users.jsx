import React, { useEffect, useState } from 'react';
import './Categories.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import AdminNav from './AdminNav';
import bin from '../../assets/bin.png';

const Users = () => {
  const [users, setUsers] = useState([])
  const { id } = useParams()

  const handleFetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8000/users");
      setUsers(response.data)
    } catch (error) {
    }
  }

  useEffect(() => {
    handleFetchUsers()
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/delusers/${id}`);
      if (response.status == 200) {
        alert("User Deleted");
        handleFetchUsers();
      }
    } catch (error) {
      console.log(error);
      alert("Deletion Error");
    }
  }
  return (
    <>
      <AdminNav />
      <div className="categories-container">
        <h2>USERS</h2>
        <table className='cat-table'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Password</th>
              <th>User Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => {
              return (
                <tr>
                  <td>{item.userid}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.password}</td>
                  <td>{item.usertype}</td>
                  <td className='action-col'>
                    <div className="table-images">
                      <img onClick={() => handleDelete(item.userid)} src={bin} />
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users;
