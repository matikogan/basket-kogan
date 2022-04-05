import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/footer';
import Container from '@mui/material/Container';
import ListProducts from './components/ListProducts/ListProducts';
import Title from './components/Title/Title';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';

import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<ListProducts/>} />
            <Route path='/:category/:id' element={<ProductDetailContainer/>}/>
          {/* <Container className='general-container'>
            <Title title='Jerseys'/>
              <ListProducts />   
            </Container>*/} 
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
