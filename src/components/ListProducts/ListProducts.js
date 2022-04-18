import 'bootstrap/dist/css/bootstrap.min.css';
import Jersey from '../Product-card/productCard'; 
import React,{ useState, useEffect } from 'react';
import mockProducts from '../../Mock/MockProduct';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';


const ListProducts = () => {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    

    const getProducts = async () => { 
        const itemCollection = collection (db, 'productos')
        const productSnapshot = await getDocs(itemCollection)
        console.log('productSnapshot', productSnapshot)
        const productList = productSnapshot.docs.map ((doc) => {
            let product = doc.data()
            product.id = doc.id
            console.log('product', product)
            return product
           
            }

        )
        return productList
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
                    return(
                       <Jersey data={product} key={id} /> 
                    )
                })}
            
            </div>
        </div>
    )
}

export default ListProducts;