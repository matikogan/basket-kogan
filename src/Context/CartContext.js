import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [amountUnits, setAmountUnits] = useState()
    const stock = 5


    const addProductToCart = (product, productQuantity) => {

       const exist = cartProducts.findIndex((producto) => {
           return producto.id === product.id;
       })
       if(exist === -1) {
       product.cantidad = productQuantity;
       setCartProducts(cartProducts => [...cartProducts, product])
       cartProductsQuant();
       } else {
           if (stock < (product.cantidad + productQuantity)){
           } else {
                cartProducts[exist].cantidad += productQuantity;
                cartProductsQuant();
           }
        }
        
    }

    const totalPrice = () => {
        let total = 0
        cartProducts.map((product) => {
            total = total + product.price * product.cantidad;
        })
        return total
    }

    const cartLength = () => {
        let largo = cartProducts.length;
        return largo
    }

    const cartProductsQuant = () => {
        let cantidad = 0;
        for (const product of cartProducts) {
            cantidad = cantidad + product.cantidad
        }
        setAmountUnits(cantidad);
        return cantidad
    }

    const deleteOneProduct = (id) => {
        const exist = cartProducts.findIndex((producto) => {
            return producto.id = id;
        })
        if (exist === -1){
            return;
        }else {
            if(cartProducts[exist].cantidad > 1){
                cartProducts[exist].cantidad -= 1;
                cartProductsQuant();
            }
        }
    }
    
    const removeProduct = (id) => {
        const exist = cartProducts.findIndex((product) => {
            return (
            product.id === id
            )
        })
        cartProducts.splice(exist, 1);
        cartProductsQuant()
    }

    const cleanCart = () => {
        setCartProducts([]);
        cartProductsQuant();
    }

    const data = {
        cartProducts,
        amountUnits,
        addProductToCart,
        cartProductsQuant,
        cartLength,
        totalPrice,
        deleteOneProduct,
        removeProduct,
        cleanCart
    }

    return (
        <CartContext.Provider value={ data }>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider }
export default CartContext;