import './App.css';
import Navbar from './components/Navbar/Navbar'
import Container from '@mui/material/Container';
import ListProducts from './components/ListProducts/ListProducts';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div className="App">
      <Navbar />
        <Container className='general-container'>
          <ListProducts />
        </Container>
    </div>
  );
}

export default App;
