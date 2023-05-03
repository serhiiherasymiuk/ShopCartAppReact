import { createContext, useState } from "react";

export const CartContext = createContext({ 
    cart: [],
    setCart: () => null,
    clearCart: () => null
});

export const CartProvider = ({ children }) => {
    const [products, setCart] = useState([]);

    const clearCart = () => cart = [];

    const value = { cart, setCart, clearCart };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}