import React from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  // Filtrar los productos que tienen stock disponible
  const availableItems = items.filter(item => item.Stock > 0);

  return (
    <div className="item-list-container-horizontal">
      {availableItems.map(item => (
        <Link to={`/item/${item.id}`} key={item.id}>
          <Item
            title={item.Título}
            description={item.Descripción}
            price={item.Precio}
            image={item.Imagen}
            stock={item.Stock}
          />
        </Link>
      ))}
    </div>
  );
};

export default ItemList;

