import './App.css';
import Navbar from './components/Navbar/Navbar'
import Container from '@mui/material/Container';
import ListProducts from './components/ListProducts/ListProducts';
import Title from './components/Title/Title';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <Navbar />
        <Container className='general-container'>
          <Title title='Regulat Jerseys'/>
          <ListProducts />
          <Title title='All Star Edition Jerseys'/>
          <ListProducts />
        </Container>
    </div>
  );
}

export default App;
