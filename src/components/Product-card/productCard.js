import React,{ useState, useContext, useEffect } from 'react';
import './productCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import CartContext from '../../Context/CartContext';
import ItemCount from '../Utils/itemCount';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Jersey( {data, action} ) {
    
    const { title, subtitle, img, price, id,} = data

    const [productQuantity, setProductQuantity] = useState(0);
    const {addProductToCart} = useContext(CartContext)
    const stock = 5

    const onAdd = (e, count) => {
        if (!!e & productQuantity<1){
        setProductQuantity(count)
        }
    }
    
    useEffect(() => {
        if(productQuantity > 0){
            addProductToCart(data, productQuantity)
        }
    }, [productQuantity] )



     return (
            <div className='col-4' >
                <div className='cardProduct-container'>
                    <h2 className='jersey-title text-center'>{title}</h2>
                    <h5 className='text-center'>{subtitle}</h5>
                    <Link to={`/products/${id}`}><img className='jersey_img' src={img} alt={img}></img></Link>
                    <p id='price'>$ {price}</p>
                    <ItemCount stock={stock} initial={1} action={onAdd} />
                </div>
            </div>
    )
}


 