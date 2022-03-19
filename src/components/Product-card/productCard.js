import React from 'react'
import './productCard.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Jersey (props) {
    return (
            <div className='col-4'>
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{props.title}</h2>
                    <h5 className='text-center'>{props.subtitle}</h5>
                    <img className='jersey_img' src={props.img}></img>
                    <p>Price: ${props.price}</p>
                    <button id='addCart'>Add to cart</button>
                </div>
            </div>

                
    )
}


