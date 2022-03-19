import React from 'react'
import Button from '@mui/material/Button';
import './Navbar.css'

function Navbar() {
    return (
        <header className="main-header">
            <div className="container-logo">
                <img src='logo1.png'/>
            </div>
            <ul className = "navbar">
                <li><Button variant="contained" color="error">Home</Button></li>
                <li><Button variant="outlined" color="error">Products</Button></li>
                <li><Button variant="outlined" color="error">Contact</Button></li>
                <li><Button variant="outlined" color="error">About Us</Button></li>
            </ul>
      </header>
    )
}


export default Navbar

     