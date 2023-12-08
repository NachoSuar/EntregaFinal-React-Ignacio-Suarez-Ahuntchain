// import { Link } from "react-router-dom";
// import formatPrice from "../formatPrice";

// const Cart = ({ title, title2, price, image, id, stock }) => {
//   return (
//     <Link to={`/item/${id}`}>
//       <div className="border border-gray-300 shadow-xl px-3 py-4 flex flex-col h-full">
//         <img src={image} alt={title} className="w-1/2 mx-auto h-1/2 mt-4" />
//         <h2 className=" text-xl text-justify font-bold text-gray-600 mt-4 h-1/4">
//           {title} - {title2}
//         </h2>

//         <span className="ml-5 text-3xl font-bold">{`${formatPrice(
//           price
//         )}`}</span>
//         {stock === 0 && (
//           <p className="text-red-600 text-right text-xl px-5 font-bold">
//             Sin Stock
//           </p>
//         )}
//       </div>
//     </Link>
//   );
// };
// export default Cart;




// ------------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { useContext } from 'react';
// import './Cart.css';
// import { CartContext } from '../../context/CartContext';
// import { Link } from 'react-router-dom';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import CartItem from '../CartItem/CartItem';
// import Checkout from '../Cheakout/Cheakout';

// const Cart = () => {
//   const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

//   if (totalQuantity === 0) {
//     return (
//       <Container fluid className="d-flex justify-content-center align-items-center vh-100">
//         <Card className="p-4">
//           <Card.Body className="text-center">
//             <h1>No Hay items en el carrito</h1>
//             <Link to={'/'} className="Cart_button">
//               Productos
//             </Link>
//           </Card.Body>
//         </Card>
//       </Container>
//     );
//   }

//   return (
//     <Container fluid className="d-flex justify-content-center align-items-center">
//       <Card className="my-5 p-4">
//         <Card.Body>
//           <h3 className="text-center mb-4">Tu Carrito de Compras</h3>
//           <Row>
//             <Col md={8}>
//               {cart && cart.length > 0 ? (
//                 cart.map((prod) => (
//                   <Row key={prod.id} className="my-2">
//                     <CartItem {...prod} />
//                   </Row>
//                 ))
//               ) : (
//                 <Row className="my-2">
//                   <p>No hay items en el carrito</p>
//                 </Row>
//               )}
//             </Col>
//             <Col md={12} className="mt-4">
//               <div className="d-flex justify-content-between align-items-center flex-column">
//                 <div className="text-center mb-4">
//                   <h5>Resumen de Compra</h5>
//                   <p>Total: ${total}</p>
//                 </div>
//                 <Link to={'/'} className="ItemDetail_button__finished mt-3">
//                   Seguir Comprando
//                 </Link>
//                 <div className="w-100 mt-3 d-flex justify-content-between">
//                   <Link to="/Cheakout" className="Cart_button btn-success">
//                     Finalizar Compra
//                   </Link>
//                   <Button
//                     style={{ backgroundColor: '#FF9209', border: 'none' }}
//                     onClick={() => clearCart()}
//                   >
//                     Limpiar Carrito
//                   </Button>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// };

// export default Cart;

//------------------------------------------------------------------------------------------------
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
          {products.map((item) => {
            return(
              <div key={item.id}>
            <Item
              title={item.Título}
              description={item.Descripción}
              price={item.Precio}
              image={item.Imagen}
              stock={item.Stock}
            />
            <button className="Cart_button btn-success" onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
            );
          })}
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


