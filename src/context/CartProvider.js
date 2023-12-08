// import React, { useState, useEffect , useContext} from "react";
// import { CartContext } from './CartContext';

// const useCartContext = () => useContext(CartContext)

// const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);

//     const addItem = (item, newQuantity) =>{

//         const newCart = cart.filter(prod => prod.id !== item.id);
//         newCart.push({...item, quantity: newQuantity});
//         setCart(newCart)


//     };


//     const clearCart = () => setCart([]);
    
//     const isInCart = (id) =>{
//         return cart.find(product => product.id === id) ? true : false;
//     }

//     const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

//     return (
//         <CartContext.Provider value={{ products, addItem, productQuantity, clear, clearCart, isInCart, removeProduct }}>
//             {children}
//         </CartContext.Provider>
//     );
// };

// export default CartProvider;

import { useEffect, useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productQuantity, setProductQuantity] = useState(0);

  const addItem = (product, quantity) => {
    console.log(quantity);
    // if (isInCart(product.id)){
    //     const newProducts = products.map((item) => {
    //         if (item.id === product.id){
    //             return{
    //                 ...item,
    //                 quantity: item.quantity + quantity,
    //             };
    //         }
    //         return item;
    //     });
    //     setProducts(newProducts)
    // } return;

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
