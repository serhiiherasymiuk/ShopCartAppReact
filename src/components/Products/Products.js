import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";
import { CartContext } from "../../contexts/cart-context";
import './Products.css';

export function Products() {
  const { products, setProducts } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);

  const AddProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const RemoveFromCart = (productId) => {
    const index = cart.findIndex((product) => product.id === productId);
    if (index >= 0) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div className="Products">
      <h2>Product List {cart.length}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => AddProductToCart(product)}>Add to Cart</button>
          <button onClick={() => RemoveFromCart(product.id)}>Remove from Cart</button>
        </li>
        ))}
      </ul>
    </div>
  );
}
