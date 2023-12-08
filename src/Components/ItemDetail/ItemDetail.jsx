import { useContext, useState } from "react";
import './style.css';
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Item from "../Item/Item";


// const ItemDetail = ({ itemSelected }) => {
//   const [count, setCount] = useState(0);
//   const stock = 6;
//   const navigate = useNavigate();
//   const { addItem } = useContext(CartContext);

//   const addToCart = () => {
//     console.log("Count before addItem:", count);
//     addItem(itemSelected, count);
//   };

//   const handleNavigation = () => {
//     navigate('/cart');
//   };
//   return(
//     <div>
//       <h6 className="card-title">{itemSelected?.title}</h6>
//       <img src={itemSelected?.image} alt={itemSelected?.title} width={70} />
//       <div className="card-description">
//         <p>{itemSelected?.description}</p>
//       </div>
//       <span>Stock: {stock}</span>
//       <p>${itemSelected?.price}</p>
//       <div>
//         <button onClick={handleNavigation}>Terminar mi Compra</button>
//         <button onClick={addToCart}>Agregar al Carrito</button>
//         <ItemCount count = {count} setCount = {setCount} stock={stock} />
//       </div>
//     </div>
//   );
// };




// export default ItemDetail; ---------------------------------------------------------------------------------------

const ItemDetail = ({ itemSelected }) => {
  const [count, setCount] = useState(0);
  const stock = 6;
  const navigate = useNavigate();
  const { addItem } = useContext(CartContext);

  const addToCart = () => {
    console.log("Count before addItem:", count);
    addItem(itemSelected, count);
  };

  const handleNavigation = () => {
    navigate('/cart');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {/* Utilizamos el componente Item en lugar de renderizar manualmente */}
      <Item
        title={itemSelected?.Título}
        description={itemSelected?.Descripción}
        price={itemSelected?.Precio}
        image={itemSelected?.Imagen}
      />

      <span>Stock: {stock}</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleNavigation}>Terminar mi Compra</button>
        <button onClick={addToCart}>Agregar al Carrito</button>
      </div>
      <ItemCount count={count} setCount={setCount} stock={stock} />
    </div>
  );
};


export default ItemDetail;


// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../../context/CartContext';
// import ItemCount from '../ItemCount/ItemCount';

// const ItemDetail = ({ details }) => {
//   const [cantidad, setCantidad] = useState(0);
//   const { addToCart } = useContext(CartContext);
//   const stock = 6;
//   const onAdd = (cantidad) => {
//     setCantidad(cantidad);
//     addToCart(details, cantidad);
//   };
//   console.log('details:', details);
//   return (
//     <div className='row m-auto'>
//       <div className='col-12 col-md-6 text-center'>
//       </div>
//       <div className='col-12 col-md-6'>
//         <h1>Artículo </h1>
//         <h3>Categoría: </h3>
//         <h3>Precio: $</h3>
//         <h4>Descripción: </h4>
//         <h4>Stock: </h4>
//         <br/>
//         <div>
//          <button onClick={addToCart}>Agregar al Carrito</button>
//          <ItemCount count={cantidad} setCount={setCantidad} stock={stock} />
//        </div>
//         <Link to="/">Seguir comprando</Link>
//       </div>
//     </div>
//   )
// }

// export default ItemDetail;
