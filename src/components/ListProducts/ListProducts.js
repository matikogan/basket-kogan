import 'bootstrap/dist/css/bootstrap.min.css';
import Jersey from '../Product-card/productCard'; 
import React,{ useState, useEffect } from 'react';
import mockProducts from '../../Mock/MockProduct';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ListProducts = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])

    const getProducts = () => { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve(mockProducts)
            }, 2000);
            
        })
    }

    useEffect( () => {
        setProducts([])
        getProducts().then( (productos) => {
            category ? filterProductByCategory(productos, category) : setProducts(productos)
        }) 
    }, [category])

    
    const filterProductByCategory = (array , category)=> {
        return array.map( (product, i) => {
            if(product.category === category) {
                return setProducts(products => [...products, product]);
            }
        })
    }


    return (
        <div className="container">
            <div className='row'>
                {products.map( ( product ) => { 
                    const {id} = product
                    console.log(product)
                    return(
                       <Jersey data={product} key={id} /> 
                    )
                })}
            
            </div>
        </div>
    )
}

export default ListProducts;