import 'bootstrap/dist/css/bootstrap.min.css';
import Jersey from '../Product-card/productCard'; 
import React,{ useState, useEffect } from 'react';

const ListProducts = () => {

    const mockProducts = [{
        title : 'Nuggets',
        subtitle : 'Alernative Jersey',
        price : 210 ,
        img : './denver-oscura.jpg',
        id : 1 
    },
    {
        title : 'Golden State',
        subtitle : 'Original Jersey',
        price : 220 ,
        img : './goldenState-titu.jpg',
        id : 2
    },
    {
        title : 'Philadelphia',
        subtitle : 'Original Jersey',
        price : 220 ,
        img : './76ers-titu.jpg',
        id : 3 
    },
    {
        title : 'KD Team',
        subtitle : 'All Star Edition',
        price : 250 ,
        img : './all-star-edition-grey.jpg',
        id : 4
    },
    {
        title : 'LJ Team',
        subtitle : 'All Star Edition',
        price : 250 ,
        img : './all-star-edition-pink.jpg',
        id : 5
    },
    {
        title : 'Retro',
        subtitle : 'All Star Edition',
        price : 310 ,
        img : './all-star-retro.jpg',
        id : 6
    }]


    const [products, setProducts] = useState([])

    const getProducts = () => { 
        return new Promise((resolve, reject) => {
            return resolve(mockProducts)
        })
    }

    useEffect( () => {
        getProducts().then( (products) => {
            setProducts(products)
        }) 
    }, [])

    
    


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