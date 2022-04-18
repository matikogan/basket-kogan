import './ProductDetail.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { doc, getDoc} from 'firebase/firestore';
import db from '../../firebase';
import CartContext from '../../Context/CartContext';


const ProductDetail = () => { 

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [cart, setCart] = useState(0)
    const {cartProducts, addProductToCart} = useContext(CartContext)
    

    const getProduct = async () => {
        const docRef = doc(db, 'productos', id)
        const docSnap = await getDoc (docRef);

        if (docSnap.exists()) {
            //console.log('document data:', docSnap.data())
            let product = docSnap.data()
            product.id=docSnap.id
            setProduct(product) 
            console.log ('product: ', docSnap.length)
        } else {
            console.log('No such document');
        }
    }

    useEffect( () => {
       getProduct()
        }, [id])


       const addToCart = () => {
            setCart(cart + 1)
            addProductToCart(product)
            console.log('cantidad de prods: ', cartProducts.length)
        }


    return (
            <div className='row'>
                <div className='col-8 img-container'>
                    <div className='detail-img'>
                    <img src={product.img} alt=''></img>
                    </div>
                </div>
                <div className='col-4'>
                    <div className='info-container'>
                        <p className='p-detail'>Sustainable Materiales</p>
                        <h2>{product.title}</h2>
                        <h2>Edition 2022</h2>
                        <p className='p-detail' id='sub-desc'>{product.subtitle}</p>
                        <p className='p-detail'>${product.price}</p>
                        <button id='button-detail' onClick={addToCart}>Add to Cart</button>
                        <p className='p-detail' id='product-desc'>Bold alternate colors and details distinguish the Statement Edition, a jersey that symbolizes the collective strength, spirit and competitive mindset of the roster. The Jordan NBA Statement Edition Swingman Jersey of the Brooklyn Nets is inspired by what the pros wear. It's made from premium double-knit fabric with an easy, relaxed fit that looks great on fans. This product is made with 100% recycled polyester fibers.</p>
                    </div>
                </div>
            </div>
    )
}

export default ProductDetail;