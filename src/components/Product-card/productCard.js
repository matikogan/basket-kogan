import React,{useState} from 'react';
import './productCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Jersey( data ) {


    return (
            <div className='col-4'>
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{data.title}</h2>
                    <h5 className='text-center'>{data.subtitle}</h5>
                    <img className='jersey_img' src={data.img} alt='hola'></img>
                    <p>Price: ${data.price}</p>
                    <button id='addCart'>Add to cart</button>
                </div>
            </div>


    )
}


