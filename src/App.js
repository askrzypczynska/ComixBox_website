import './App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../src/pages/Home/Home'
import About from '../src/pages/About/About'
import ComixDetails from '../src/components/ComixDetails/ComixDetails'
import ComixList from '../src/components/ComixList/ComixList'
import comicsApi from 'comicbooks-api';
import { AppProvider } from './content';

function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home />}>
            <Route path='about' element = {<About />} />
            <Route path='comix' element = {<ComixList />} />
            <Route path='/comix/:id/:title' element = {<ComixDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;