import './SearchForm.css';
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


function SearchForm() {
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <div className='search-form-elem'>
            <input type="text" className='search-form-control' placeholder='Ultimate Spider-Man'></input>
            <button type="submit" className='search-form-btn'>
              <FaSearch className='search-form-icon' size={32} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
