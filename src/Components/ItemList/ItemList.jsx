// import React, { useEffect, useState } from "react";
// import Item from '../Item/Item';
// import './style.css';
// import { Link, useParams } from "react-router-dom";

// const ItemList = () => {
//   const [items, setItems] = useState([]);
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const productList = await response.json();

//         if (id) {
//           const idFormatted = id.includes('-') ? id.replace('-', ' ') : id;
//           const filteredItems = productList.filter(product => product.category === idFormatted);
//           setItems(filteredItems);
//         } else {
//           setItems(productList);
//         }
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, [id]);

//   return (
//     <div className="item-list-container">
//       {items.map(item => (
//         <Link to={'/item/' + item.id} key={item.id}>
//           <Item
//             title={item.title} 
//             description={item.description} 
//             price={item.price}
//             image={item.image}
//           />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ItemList;


// import React from "react";
// import { Link } from "react-router-dom";
// import Item from "../Item/Item";
// import './style.css';

// const ItemList = ({ productList }) => {
//   return (
//     <div className="item-list-container">
//       {productList.map(item => (
//         <Link to={`/item/${item.id}`} key={item.id}>
//           <Item
//             title={item.title} 
//             description={item.description} 
//             price={item.price}
//             image={item.image}
//           />
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default ItemList;

//----------------------------------------------------------------------------------------------------//

// import { useEffect,useState } from "react";
// import Item from '../Item/Item';
// import './style.css';
// import { Link,useParams } from "react-router-dom";
// import ItemListContainer from "../ItemListContainer/ItemListContainer";

// const ItemList = () =>{
//   const [items, setItems] = useState([]);
//   const {id} = useParams();

//   const fetchProducts = fetch('https://fakestoreapi.com/products')
//   .then((res) => res.json())
//   .then((json) => {
//     return json;
//   })
//   .catch ((err) => console.log(err));

//   useEffect(()=>{
//     const myFunction = async () =>{
//       if (id) {
//         const filteredItems = await fetchProducts.then((productList) =>{
//           return productList.filter((product) =>{
//             const idFormated = id.includes('-') ? id.replace ('-', ' ') : id;

//             return product.category === idFormated;
//           });
//         });
//       } else {
//         fetchProducts.then((productList) =>{
//           setItems(productList);
//         });
//       }
//     };
//     myFunction();
//   }, [id]);
//   return(
//     <div className="item-list-container">
//       {items.map((item) =>{
//         return(
//           <Link to ={'/item/' + item.id} key={item.id}>
//           <Item
//           title={item.title}
//           description={item.description}
//           price={item.price}
//           image={item.image}
//           />
//           </Link>
//         );
//       })}
//     </div>
//   );
// };

// export default ItemList;

// ---------------------------------------------- Origin ----------------------------------------


import React from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import './ItemList.css';

const ItemList = ({ items }) => {
  return (
    <div className="item-list-container-horizontal">
      {items.map(item => (
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
