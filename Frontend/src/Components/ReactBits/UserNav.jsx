import React from 'react';
import './UserNav.css';
import GlassSurface from './Glass';
import cart from '../../assets/cart.png'

const UserNav = () => {
  return (
    <nav className="usernav-wrapper">
      <GlassSurface
        width={900}
        height={70}
        borderRadius={50}
        displace={15}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}  
        blueOffset={25}
        brightness={60}
        opacity={0.8}
        mixBlendMode="screen"
      >
        <div className="usernav-inner">
          <div className="brand">
            <span className="brand-name">Inventory</span>
          </div>

          <ul className="nav-links">
            <li><a href="#dashboard">HOME</a></li>
            <li><a href="#products">PROFILE</a></li>
            <li><a href="#orders">ABOUT US</a></li>
          </ul>

          <div className="profile">
            <img src={cart} />
          </div>
        </div>
      </GlassSurface>
    </nav>
  );
};

export default UserNav;
