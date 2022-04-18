import Title from "../Title/Title";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext, useState } from "react";
import db from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import CartContext from "../../Context/CartContext";

const CartPage = () => {
    const { cartProducts, deleteProduct, totalPrice } = useContext(CartContext)

    console.log('total priceL: ', totalPrice)

    return (
        <div>
            <Title title='Cart'/>
            <div className="cart-container">
                <ul className="row table-title">
                    <li className="col">Product</li>
                    <li className="col">Description</li>
                    <li className="col">Price</li>
                    <li className="col">Quantity</li>
                    <li className="col">Remove</li>
                </ul>
                {cartProducts.map( (cartProduct) => {
                    const{ price, img, title, desc, id } = cartProduct
                    return (
                        <ul className="row product">
                            <li className="col"><img src={`./${img}`}/></li>
                            <li className="col">{desc}</li>
                            <li className="col">${price}</li>
                            <li className="col">1</li>
                            <li className="col"><button onClick={() => deleteProduct(cartProduct)}><DeleteForeverIcon /></button></li>
                        </ul>
                    )
                })}
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
            </div>
        </div>
    )
};

export default CartPage;