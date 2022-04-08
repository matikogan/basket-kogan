import React,{ useState } from 'react';
import './productCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';





export default function Jersey( {data, action} ) {
    
    const { title, subtitle, img, price, id } = data
    
    
    

     return (
            <div className='col-4' >
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{title}</h2>
                    <h5 className='text-center'>{subtitle}</h5>
                    <Link to={`/products/${id}`}><img className='jersey_img' src={img} alt={img}></img></Link>
                    <p>Price: ${price}</p>
                    <button onClick={action} id='addToCart'>Add to Cart</button>
                </div>
            </div>
    )
}


