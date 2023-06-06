import './SearchForm.css';
import React, { useRef, useEffect } from 'react';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../content';


function SearchForm() {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("batman");
      setResultTitle("Please Enter Something ...")
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/comix");
  }

  const handleClick = () => {
    searchText.current.focus();
    
  }

  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
          <form onSubmit={handleSubmit}>
            <div className='search-form-elem'>
              <input type="text" className='search-form-control' placeholder='Ultimate Spider-Man' ref = {searchText} onClick={handleClick}></input>
              <button type="submit" className='search-form-btn' onClick={handleSubmit}>
                <FaSearch className='search-form-icon' size={32} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
