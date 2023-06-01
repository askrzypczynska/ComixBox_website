import './Header.css';
import React from 'react';
import Navbar from '../NavBar/NavBar';
import SearchForm from '../SearchForm/SearchForm';

function Header() {
  return (
    <div className='header'>
      <header className='header'>
        <Navbar />
        <div className='header-content'>
          <div className='header-content-inner'>
            <h2 className='header-title'>
              Find your comix!
            </h2>
            <p className='header-text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magnam, consequuntur voluptates quos labore quasi dolorem quaerat. A repellat totam delectus blanditiis voluptate deserunt illo nihil sunt, vitae fuga quidem.
            </p>
            <SearchForm />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
