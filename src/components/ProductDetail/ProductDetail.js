import './ProductDetail.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import mockProducts from '../../Mock/MockProduct';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProductDetail = () => { 

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect( () => {
        filterProductsById(mockProducts, id)
        }, [id])

    
    const filterProductsById = (array , id) => {
        return array.map( (product) => {
            if(product.id == id) {
                return setProduct(product)
            }
        })
    }

  /*  

    

    

     */

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
                        <p className='p-detail'>{product.title}</p>
                        <button id='button-detail'>Add to Cart</button>
                        <p className='p-detail' id='product-desc'>Bold alternate colors and details distinguish the Statement Edition, a jersey that symbolizes the collective strength, spirit and competitive mindset of the roster. The Jordan NBA Statement Edition Swingman Jersey of the Brooklyn Nets is inspired by what the pros wear. It's made from premium double-knit fabric with an easy, relaxed fit that looks great on fans. This product is made with 100% recycled polyester fibers.</p>
                    </div>
                </div>
            </div>
    )
}

export default ProductDetail;