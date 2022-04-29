import Title from "../Title/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import React, { useContext, useState, useEffect } from "react";
import CartContext from "../../Context/CartContext";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../CartModal/CartModal";
import { async } from "@firebase/util";
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

const CartPage = () => {
    const { cartProducts, removeProduct, totalPrice, cleanCart, deleteOneProduct, addProductToCart } = useContext(CartContext)
    const navigate = useNavigate();
    const [haveProducts, setHaveProducts] = useState(false);
    const [totalCart, setTotalCart] = useState(totalPrice)
    const [openModal, setOpenModal] = useState(false)
    const [orderFinish, setOrderFinish] = useState()
    const [loadingOrder, setLoadingOrder] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        phone: '',
        email: ''
    })

    const [order, setOrder] = useState({
        buyer: formData,
        products: cartProducts.map((cartProduct) => {
            return {
                id: cartProduct.id,
                title: cartProduct.title,
                price: cartProduct.price

            }
        }),
        total: totalPrice()
    }
    )

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


    const handleClose = () => {
        if (orderFinish){
            cleanCart();
            navigate ('/');
        } else {
            setOpenModal(false)
        }
    }
 
    const handleChange = (e) => {
        const{name, value} = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setOrder({...order, buyer: formData});
        let prevOrder = {...order, buyer: formData};
        sendOrder(prevOrder);
    }


    const sendOrder =  async(prevOrder) => {
        setLoadingOrder(false)
        const orderFirebase = collection(db, 'orders')
        const orderDoc = await addDoc(orderFirebase, prevOrder);
        setOrderFinish(orderDoc.id)
        setLoadingOrder(true);
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
                                <li className="col-4 total"><button onClick={() => setOpenModal(true)} id="checkoutBtn">Checkout</button></li>
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
              
            {orderFinish?(
                    <div className='postMessage'>
                        <h2>¡Thank for your purchase {formData.name}!</h2>
                        <h3>Your order was delivered succesfully!</h3>
                        <p><b>Order Number:</b> {orderFinish}</p>
                        <p>Click outside this window to return to the home page</p>
                    </div>
                ):(loadingOrder?(
                    <div>
                        <h2>Formulario de Envio</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <input type="text" name='name' placeholder='Name' onChange={handleChange} value={formData.name} className='inputForm' />
                            </div>
                            <div>
                                <input type="text" name='surname' placeholder='Surname' onChange={handleChange} value={formData.surname} className='inputForm' />
                            </div>
                            <div>
                                <input type="number" name='phone' placeholder='Phone' onChange={handleChange} value={formData.phone} className='inputForm' />
                            </div>
                            <div>
                                <input type="mail" name='email' placeholder='E-mail' onChange={handleChange} value={formData.email} className='inputForm' />
                            </div>
                            <div>
                                <Button id="sendForm" type="submit">Enviar</Button>
                            </div>
                        </form>
                    </div>
                    
                ):(
                    <h2>Procesando solicitud...</h2>
                )
                )}
                

            </CartModal>

        </div> 
    )}


    

export default CartPage;