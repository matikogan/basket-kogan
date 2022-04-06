import React,{ useState } from 'react';
import './productCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';





export default function Jersey( {data} ) {
    
    const { title, subtitle, img, price, id } = data
    const [ countCart, setCountCart ] = useState(0)
    const [ cart, setCart ] = useState(5)
    
    const addCart = () => {
        if(countCart < cart) {
            setCountCart(countCart + 1)
        }
    };

    const delCart = () => {
        if (countCart > 0)  {
            setCountCart(countCart - 1)
        }
    };



    return (
            <div className='col-4' >
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{title}</h2>
                    <h5 className='text-center'>{subtitle}</h5>
                    <Link to={`/products/${id}`}><img className='jersey_img' src={img} alt={img}></img></Link>
                    <p>Price: ${price}</p>
                    <button onClick={addCart} id='addCart'>Add to cart</button>
                    <button onClick={delCart} id='addCart'>Remove from cart</button>
                    <p>You have {countCart} on your Cart</p>
                </div>
            </div>


    )
}


