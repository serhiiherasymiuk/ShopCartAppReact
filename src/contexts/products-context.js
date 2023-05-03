import { createContext, useState } from "react";

export const ProductsContext = createContext({ 
    products: [],
    setProducts: () => null,
    clearProducts: () => null
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { id: 1, name: "Product 1", price: 10.99 },
        { id: 2, name: "Product 2", price: 15.99 },
        { id: 3, name: "Product 3", price: 12.99 }
    ]);

    const clearProducts = () => products = [];

    const value = { products, setProducts, clearProducts };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}