import Title from "../Title/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useContext, useState, useEffect } from "react";
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import CartContext from "../../Context/CartContext";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../CartModal/CartModal";

const CartPage = () => {
    const { cartProducts, removeProduct, totalPrice, cleanCart, deleteOneProduct, addProductToCart } = useContext(CartContext)
    const navigate = useNavigate();
    const [haveProducts, setHaveProducts] = useState(false);
    const [totalCart, setTotalCart] = useState(totalPrice)
    const [openModal, setOpenModal] = useState(false)
    const [orderFinish, setOrderFinish] = useState()


    const handleOneLess = (id) => {
        deleteOneProduct(id);
        setTotalCart(totalPrice);
    }

    const handleOneMore = (product, one) => {
        addProductToCart(product, one);
        setTotalCart(totalPrice);
    }

    const handleDeleteProduct = (id) => {
        removeProduct(id);
        setTotalCart(totalPrice);
    }

    const handleCleanCart = () => {
        cleanCart();
        setTotalCart(0);
    }

   const handleOpen = () => {
        setOpenModal(true);
    };

  const handleClose = () => {
        if (orderFinish){
            cleanCart();
            navigate ('/');
        } else {
            setOpenModal(false)
        }
    }
 

    useEffect(() => {
        if(totalCart > 0) {
            setHaveProducts(true)
        }else{
            setHaveProducts(false)
        }
    }, [totalCart])

    return (
        <div>
            <Title title='Cart'/>
            {haveProducts?(
                    <div className="cartConteiner">
                        <ul className="row table-title">
                            <li className="col">Product</li>
                            <li className="col">Description</li>
                            <li className="col">Price</li>
                            <li className="col">Quantity</li>
                            <li className="col">Remove</li>
                        </ul>
                        {cartProducts.map((product)=>{
                            return(
                                <div className="cartConteiner__item" key={product.id}>
                                    <ul className="row product">
                                        <li className="col"><img src={`./${product.img}`} alt={product.id}/></li>
                                        <li className="col cartInfo">{product.title}</li>
                                        <li className="col cartInfo">${product.price}</li>
                                        <li className="col cartInfo">
                                            <p>
                                                <Button onClick={()=>{handleOneLess(product.id)}}>-</Button>
                                                    {product.cantidad}
                                                <Button onClick={()=>{handleOneMore(product, 1)}}>+</Button>
                                            </p>
                                        </li>
                                        <li className="col cartInfo"><button onClick={() =>{handleDeleteProduct(product.id)}}><DeleteForeverIcon /></button></li>
                                    </ul>
                                </div>
                            )
                        })}
                        <div className="cleanCart-container">
                            <Button id='cleanCart' onClick={() => {handleCleanCart()}}>Clean cart</Button>
                        </div>
                        <div className="payResume">
                            <ul className="row justify-content-end">
                                <li className="col-2">Subtotal</li>
                                <li className="col-2">${totalPrice()}</li>
                            </ul>
                            <ul className="row justify-content-end">
                                <li className="col-2 total">Total</li>
                                <li className="col-2 total">${totalPrice()}</li>
                            </ul>
                            <ul className="row justify-content-end" id='checkoutBtn-container'>
                                <li className="col-4 total"><button onClick={handleOpen} id="checkoutBtn">Checkout</button></li>
                            </ul>
                        </div>
                    </div>
                ):(
                    <div>
                        <p>There are no items in your cart.</p>
                            <p>
                                <Link to={'/'}><Button>Continue Shopping</Button></Link>
                            </p>
                    </div>
                )
            }

            <CartModal handleClose={()=>handleClose()} open={openModal}>
              
                <div>
                    <h3>Your order was delivered succesfully!</h3>
                </div>
                

            </CartModal>

        </div> 
    )}


      {/*  <div>
           
            <div className="cart-container">
                
                { haveProducts?(
                    <div>
                        {cartProducts.map((product) => {
                        return (
                            <ul className="row product">
                                <li className="col"><img src={`./${product.img}`} alt={product.id}/></li>
                                <li className="col cartInfo">{product.title}</li>
                                <li className="col cartInfo">${product.price}</li>
                                <li className="col cartInfo">
                                <p>
                                    <Button onClick={()=>{handleOneLess(product.id)}}>-</Button>
                                        Cantidad: {product.cantidad}
                                    <Button onClick={()=>{handleOneMore(product, 1)}}>+</Button>
                                </p>
                                </li>
                                <li className="col cartInfo"><button onClick={() =>{handleDeleteProduct(product.id)}}><DeleteForeverIcon /></button></li>
                            </ul>
                       
                            )
                        })}
                        <div className="cleanCart-container">
                            <Button id='cleanCart'>Clean cart</Button>
                        </div>
                        <div>
                            <ul className="row justify-content-end">
                                <li className="col-2">Subtotal</li>
                                <li className="col-2">${totalPrice}</li>
                            </ul>
                            <ul className="row justify-content-end">
                                <li className="col-2 total">Total</li>
                                <li className="col-2 total">${totalPrice}</li>
                            </ul>
                            <ul className="row justify-content-end" id='checkoutBtn-container'>
                                <li className="col-4 total"><button id="checkoutBtn">Checkout</button></li>
                            </ul>
                        </div>
                    ):(
                        <div>
                            <p>There are no items in your cart.</p>
                            <p>
                                <Link to={'/'}><Button>Continue Shopping</Button></Link>
                            </p>
                        </div>
                    </div>
                </div>
            )
        } 
        
    )
    } */}
    

export default CartPage;