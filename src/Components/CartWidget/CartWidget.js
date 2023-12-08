import React from 'react';
import Carrito from '../Imagenes/Tienda.png';
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/cart">
          <img src={Carrito} alt="Carrito de Compras" style={{ width: '50px', height: '50px', cursor: 'pointer' }} />
        </Link>
      </div>
    </div>
  );
};

export default CartWidget;

