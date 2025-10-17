import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="login-container">
                <div className="login-input-box">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button>Login</button>

                    <p>Don't have an account? <Link to={"/"} className="reg-link">SignUp</Link></p>

                </div>
            </div>
    </>
  )
}

export default Login;
