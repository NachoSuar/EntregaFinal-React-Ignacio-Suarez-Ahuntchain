import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const addItem = (product, quantity) => {
    console.log(quantity);
    setProducts([
      ...products,
      {
        ...product,
        quantity,
      },
    ]);
  };

  const removeItem = (productId) =>{
    setProducts(products.filter((product) => product.id !== productId))
  };


  useEffect(() => {
    setProductQuantity(products.reduce((acc, product) => acc + product.quantity, 0));
  }, [products]);

  const clear = () => {
    setProducts([]);
  };

  const isInCart = (id) => {
    return products.some((product) => product.id === id);
  };

  return (
    <CartContext.Provider value={{ products, addItem, productQuantity, clear, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
