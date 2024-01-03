import React, { useContext, useState, useEffect } from "react";
import './style.css';
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Item from "../Item/Item"; // Importa el componente Item

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(0);
  const [availableStock, setAvailableStock] = useState(itemSelected?.Stock || 0);
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);
  const [stockExceeded, setStockExceeded] = useState(false); // Nuevo estado para controlar si el stock se ha excedido

  const handleAddToCart = () => {
    if (count > 0 && count <= availableStock && !stockExceeded) {
      addItem(itemSelected, count);
      console.log(`Se agregaron ${count} productos al carrito.`);
      setAvailableStock(prevStock => prevStock - count);
      setCount(0);
      navigate('/cart');
    } else if (availableStock === 0) {
      console.log("El stock de este producto está agotado.");
      setStockExceeded(true); // Actualiza el estado para indicar que el stock se ha agotado
    } else {
      console.log("La cantidad seleccionada excede el stock disponible o es inválida.");
    }
  };
  
  useEffect(() => {
    if (itemSelected && itemSelected.stock) {
      setAvailableStock(itemSelected.stock);
      setStockExceeded(false);
    }
  }, [itemSelected]);
  

  const handleNavigation = () => {
    navigate('/cart');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Utiliza el componente Item para mostrar los detalles del producto */}
      <Item
        title={itemSelected?.Título}
        description={itemSelected?.Descripción}
        price={itemSelected?.Precio}
        image={itemSelected?.Imagen}
      />

      <span>Stock disponible: {availableStock}</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleNavigation}>Terminar mi Compra</button>
        <button onClick={handleAddToCart}>Agregar al Carrito</button>
      </div>
      <ItemCount count={count} setCount={setCount} stock={availableStock} />
    </div>
  );
};

export default ItemDetail;


