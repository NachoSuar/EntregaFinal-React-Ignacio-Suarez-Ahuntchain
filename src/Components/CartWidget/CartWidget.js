import React from 'react';
import Carrito from '../Imagenes/Tienda.png';

export const CartWidget = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={Carrito} alt="Carrito de Compras" style={{ width: '50px', height: '50px' }} />
      <span style={{ marginLeft: '10px' }}>5</span>
    </div>
  );
};

export default CartWidget;
