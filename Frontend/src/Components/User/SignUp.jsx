import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [ user, setUser ] = useState({
    name: "",
    email: "",
    number: "",
    password: ""
  });
  return (
    <>
      <div className="register-container">
            <div className="reg-input-box">
                <h2>SignUp</h2>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Number" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button>SignUp</button>
                
                <p>Already Signed? <Link to={"/Login"} className="login-link">Login</Link></p>
                
            </div>
        </div>
    </>
  )
}

export default SignUp;
