import React, { useState } from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmpass: ""
  });

  const handleSave = async () => {
    const { name, email, number, password, confirmpass } = user;

    if (!name || !email || !number || !password || !confirmpass) {
      toast.error("All fields required");
      return;
    }

    if (password !== confirmpass) {
      toast.error("Passwords not matching");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/addUser", { name, email, number, password });
      console.log(response);
      if (response.status === 202) {
        toast.error("Email already registred");
      } else if (response.status === 200) {
        toast.success("Registration Successfull");
        navigate("/login")
      } else {
        toast.error("Registration failed")
      }
    } catch (error) {

    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  }


  return (
    <>
      <div className="register-container">
        <div className="reg-input-box">
          <h2>SignUp</h2>
          <input onChange={handleChange} name='name' value={user.name} type="text" placeholder="Username" />
          <input onChange={handleChange} name='email' value={user.email} type="email" placeholder="Email" />
          <input onChange={handleChange} name='number' value={user.number} type="text" placeholder="Number" />
          <input onChange={handleChange} name='password' value={user.password} type="password" placeholder="Password" />
          <input onChange={handleChange} name='confirmpass' type="password" value={user.confirmpass} placeholder="Confirm Password" />
          <button onClick={handleSave}>SignUp</button>

          <p>Already Signed? <Link to={"/Login"} className="login-link">Login</Link></p>

        </div>
      </div>
    </>
  )
}

export default SignUp;
