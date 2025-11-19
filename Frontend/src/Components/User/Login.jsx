import React, { useEffect, useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFromData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prev) => ({ ...prev, [name]: value }))
  }

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8000/logUser", formData);
      const data = response.data;

      if (data.usertype === "User") {
        navigate("/home");
      } else if (data.usertype === "Admin") {
        navigate("/adminhome");
      }
    } catch (error) {
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <>
      <div className="login-container">
        <div className="login-input-box">
          <h2>Login</h2>
          <input onChange={handleChange} value={formData.email} name='email' type="email" placeholder="Email" />
          <input onChange={handleChange} value={formData.password} name='password' type="password" placeholder="Password" />
          <button onClick={handleLogin}>Login</button>

          <p>Don't have an account? <Link to={"/"} className="reg-link">SignUp</Link></p>

        </div>
      </div>
    </>
  )
}

export default Login;
