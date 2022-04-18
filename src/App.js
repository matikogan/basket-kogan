import './App.css';
import NavMenu from './components/Navbar/Navbar'
import Footer from './components/Footer/footer';
import Home from './components/Pages/Home';
import ProductDetailContainer from './components/ProductDetailContainer/ProductDetailContainer';
import ContactPage from './components/Pages/Contact';
import CartPage from './components/Pages/Cart';
import React from 'react'
import { CartProvider } from './Context/CartContext';


import { BrowserRouter, Routes, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <NavMenu />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/:category/' element={<Home />}/>
              <Route path='/:category/:id' element={<ProductDetailContainer/>}/>
              <Route path='/contact/' element={<ContactPage />}/>
              <Route path='/cart/' element={<CartPage />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
