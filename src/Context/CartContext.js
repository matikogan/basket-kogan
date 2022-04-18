import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const addProductToCart = (product) => {
       let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
       if(!exist) {
        setCartProducts(cartProducts => [...cartProducts, product])
        setTotalPrice(totalPrice + product.price)
       } 
    }

    const deleteProduct = (product) => {
        setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== product.id))
        setTotalPrice(totalPrice - product.price)
    }


    const data = {
        cartProducts,
        addProductToCart,
        totalPrice,
        deleteProduct
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;