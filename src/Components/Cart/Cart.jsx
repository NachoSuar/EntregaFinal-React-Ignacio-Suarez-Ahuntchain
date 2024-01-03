import React, { useContext } from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './Cart.css';
import { CartContext } from '../../context/CartContext';
import Formulario from './Formulario';

const Cart = () => {
  const { products, clear, removeItem } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1 className="cart-title"> Tu Carrito de Compras</h1>
      <button onClick={clear}>Vaciar carrito</button>

      {products.length > 0 ? (
        <div className="item-list-container">
          {products.map((item, index) => (
            <div key={index}>
              <Item
                title={item.Título}
                description={item.Descripción}
                price={item.Precio}
                image={item.Imagen}
                stock={item.Stock}
              />
              <p>Cantidad: {item.quantity}</p> {/* Mostrar la cantidad del producto */}
              <button className="Cart_button btn-success" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
          ))}
        </div>
      ) : (
        <h2>no hay productos en el carrito</h2>
      )}

      <Link to={'/'} className="ItemDetail_button__finished mt-3" style={{ marginBottom: '12px' }}>
        Seguir Comprando
      </Link>
      <Link to="/Formulario" className="Cart_button btn-success">
        Finalizar Compra
      </Link>
    </div>
  );
};

export default Cart;



