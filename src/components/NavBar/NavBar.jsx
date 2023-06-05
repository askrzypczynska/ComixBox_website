import './Navbar.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../img/logo.png'
import {HiMenu} from 'react-icons/hi'

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavebar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content'>
        <div className='brand-and-toggler'>
          <Link to = "/" className='navbar-brand'>
            <img src = {logoImg} alt = "site logo" />
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavebar}>
            <HiMenu size = {35} style = {{color: `${toggleMenu ? "#fff" : "#fff"}`}} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "comix" className='nav-link'>HOME</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" className='nav-link'>ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
