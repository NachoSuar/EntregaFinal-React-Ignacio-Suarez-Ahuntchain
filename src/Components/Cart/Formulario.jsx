// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import Item from "../Item/Item";
// import { Form } from "react-router-dom";

// const Checkout = () => {
//     const{ products, clear, removeItem} = useContext(CartContext)
//     return(
//         <div>
//             <h1>Tu Carrito de Compras</h1>
//             <button onClick={clear}>Vaciar Carrito</button>
//             <button>Vaciar Carrito</button>
//             {products.length > 0 ? (
//                 <div className="item-list-container">
//                     {products.map((item) =>{
//                         return (
//                             <div key={item:id}>
//                                 <Item
//                                 title={item.title}
//                                 description={item.description}
//                                 price={item.price}
//                                 image={item.image}
//                             />
//                             <button onClick={() =>removeItem(item.id)}>Eliminar</button>
//                             </div>

//                         )
//                     };
//                     );
//                     };
                    
//                 )}




//         </div>
//     );


// };

// import { useState, useContext, useEffect } from "react";
// import CheckoutForm from "./CheakoutForm";
// import { CartContext } from '../../context/CartContext';
// import { Row, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Timestamp, writeBatch, collection, documentId, getDocs, query, where, addDoc } from "@firebase/firestore";
// import { db } from "../../Config/configFirebase";


//   const Checkout = () => {
//   const [loading, setLoading] = useState(false);
//   const [orderId, setOrderId] = useState('');
//   const { cart, total, clearCart } = useContext(CartContext);

//   const createOrder = async ({ name, phone, email }) => {
//     setLoading(true)
//     try {
//         const objOrder = {
//             buyer: {
//                 name,phone, email
//             },
//             items:cart.map(({id,name,price,quantity}) => {return {id ,name,price,quantity}}),
//             total,
//             date: Timestamp.fromDate(new Date())
//         }

//         const batch =writeBatch(db)
//         const outOfStock = []
//         const ids = cart.map(prod=>prod.id)
//         const productsRef = collection(db, 'products')
//         const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(),'in',ids)))
//         const {docs} =productsAddedFromFirestore
//         docs.forEach(doc => {
//             const dataDoc = doc.data()
//             const stockDb =dataDoc.stock
//             const productAddedToCart = cart.find(prod=> prod.id ===doc.id)
//             const prodQuantity = productAddedToCart?.quantity
//             if(stockDb >=prodQuantity) {
//                 batch.update(doc.ref, {stock: stockDb-prodQuantity})
//             }else {
//                 outOfStock.push({id:doc.id, ...dataDoc})
//             }
//         })
//         if (outOfStock.length === 0) {
//             await batch.commit()
//             const orderRef = collection(db,'orders')
//             const orderAdded = await addDoc(orderRef,objOrder)
//             setOrderId(orderAdded.id)
//             clearCart()

//         }else {
//             console.error('hay productos que están Fuera de Stock');
//             console.table(outOfStock);
    
//         }

//     }catch(error){
//         console.error(error);
//     } finally {
//     setLoading(false)


//     }
       
// };

// const handleSubmitCheck = (data) => {
//   createOrder(data);
// };

// useEffect(() => {
//   if (orderId) {
//     console.log(`Orden registrada correctamente. El id de su orden es: ${orderId}`);
//   }
// }, [orderId]);

// return (
//   <>
//     {!cart.length > 0 && !orderId && (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
//         <h1>El carrito está Vacío</h1>
//       </div>
//     )}

//     {loading && !orderId && (
//       <div className="vh-75 d-flex justify-content-center align-items-center " >
//         <h1>Se está generando su orden</h1>
//         <Spinner animation="border" variant="primary" />
//       </div>
//     )}

//     {orderId && (
//       <div className="vh-75 d-flex justify-content-center align-items-center flex-column" >
//         <Row className="my-1" >
//           <h1>El id de su orden es: {orderId}</h1>
//         </Row>
//         <Row className="my-1" >
//           <Link to={"/all"} className="ItemDetail_button__finished">
//             {" "}
//             Seguir Comprando
//           </Link>
//         </Row>
//       </div>
//     )}

//     {!loading && !orderId && cart.length > 0 && (
//       <CheckoutForm onConfirm={createOrder} handleSubmitCheck={handleSubmitCheck} />
//     )}
//   </>
// );
// };

// export default Checkout;

import React, { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    repeatEmail: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para registrar el pedido o realizar las acciones necesarias con los datos del formulario
    console.log(formData); // Ejemplo: mostrando los datos en la consola
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      repeatEmail: '',
      phoneNumber: '',
    });
  };

  return (
    <div className="checkout-form">
      <h2>Formulario de Pedido</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Repetir Email:</label>
          <input
            type="email"
            name="repeatEmail"
            value={formData.repeatEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Número de Teléfono:</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="custom-button custom-button-success">
            Finalizar Pedido
          </button>
          <button type="button" onClick={handleClear} className="custom-button custom-button-danger">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
