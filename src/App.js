import './App.css';
import React from 'react';
import { ReactDOM } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import ComixDetails from '../src/components/ComixDetails/ComixDetails'
import ComixList from '../src/components/ComixList/ComixList'
// import Header from '../src/components/Header/Header'
// import Loader from '../src/components/Loader/Loader'
// import NavBar from '../src/components/NavBar/NavBar'
// import SearchForm from '../src/components/SearchForm/SearchForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />}>
          <Route path='about' element = {<About />} />
          <Route path='comix' element = {<ComixList />} />
          <Route path='/comix/:id' element = {<ComixDetails />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
