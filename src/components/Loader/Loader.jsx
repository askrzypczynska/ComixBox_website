import './Loader.css';
import React from 'react';
import LoaderImg from '../../img/loading.gif'


function Loader() {
  return (
    <div className='loader'>
      <img src={LoaderImg} alt="Loading gif" />
    </div>
  );
}

export default Loader;
