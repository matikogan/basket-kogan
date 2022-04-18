import React,{ useState, useContext } from 'react';
import './productCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import CartContext from '../../Context/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Jersey( {data, action} ) {
    
    const { title, subtitle, img, price, id } = data

    const {cartProducts, addProductToCart} = useContext(CartContext)
    const [count, setCount] = useState(1)
    const [stock, setStock] = useState(5)
    const [cart, setCart] = useState(0)

    const onAdd = () => {
        if (count < stock){
        setCount(count + 1)
        }
    }
    
    const removeStock = () => {
        if (count > 1){
        setCount(count-1)}
    }

    
    const addToCart = () => {
        setCart(cart + 1)
        addProductToCart(data)
        console.log('cabtudad: ', cart)
    }
    
    console.log('cartProducts', cartProducts)

     return (
            <div className='col-4' >
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{title}</h2>
                    <h5 className='text-center'>{subtitle}</h5>
                    <Link to={`/products/${id}`}><img className='jersey_img' src={img} alt={img}></img></Link>
                    <p>Price: ${price}</p>
                    
                        <div className='row button-container'>
                            <div className='col'>
                                <button onClick={removeStock} id='control'><RemoveIcon /></button>
                            </div>
                            <div className='col'>
                                <p>{count}</p>
                            </div>
                            <div className='col'>
                                <button onClick={onAdd} id='control'><AddIcon /></button>
                            </div>
                        </div>
                    
                    <button onClick={addToCart} id='addToCart'>Add to Cart</button>
                </div>
            </div>
    )
}


 