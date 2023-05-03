import { useContext } from "react";
import { ProductsContext } from "../../contexts/products-context";

export function Products() {
  const { products, setProducts } = useContext(ProductsContext);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
            <button onClick={() => handleAddProduct(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
