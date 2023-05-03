import { createContext, useState } from "react";

export const CartContext = createContext({ 
    cart: [],
    setCart: () => null,
    clearCart: () => null
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => cart = [];

    const value = { cart, setCart, clearCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}