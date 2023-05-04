import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart-context";

export function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const RemoveFromCart = (productId) => {
    const index = cart.findIndex((product) => product.id === productId);
    if (index >= 0) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);
    }
  };

  return (
    <div className="Cart">
      <h2>Cart {cart.length}</h2>
      <ul>
        {cart.map((product, i) => (
          <li key={i}>
            {product.name} - {product.price}
            <button onClick={() => RemoveFromCart(product.id)}>
              Remove from Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
