import React from 'react';
import './UserNav.css';
import GlassSurface from '../ReactBits/Glass';
import cart from '../../assets/cart.png'
import { useNavigate } from 'react-router-dom';

const UserNav = () => {

  const navigate = useNavigate()

  const handleCart = () => {
    navigate("/cart")
  }

  return (
    <nav className="usernav-wrapper">
      <GlassSurface
        width={900}
        height={70}
        borderRadius={50}
        backgroundOpacity={0.1}
        saturation={1}
        borderWidth={-0.15}
        brightness={50}
        opacity={0.93}
        blur={11}
        displace={0.5}
        distortionScale={-180}
        redOffset={7}
        greenOffset={34}
        blueOffset={21}
        mixBlendMode="difference"
      >

      <div className="usernav-inner">
        <div className="brand">
          <span className="brand-name">Inventory</span>
        </div>

        <ul className="nav-links">
          <li><a href="#dashboard" onClick={() => navigate("/home")}>HOME</a></li>
          <li><a href="#products">PROFILE</a></li>
          <li><a href="#orders">ABOUT US</a></li>
        </ul>

        <div className="profile">
          <img onClick={handleCart} src={cart} />
        </div>
      </div>
    </GlassSurface>
    </nav >
  );
};

export default UserNav;
