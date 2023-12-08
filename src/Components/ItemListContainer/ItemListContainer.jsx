// import React, { useState, useEffect } from "react";
// import ItemCount from "../ItemCount/ItemCount";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const { category } = useParams();

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         let url = "https://fakestoreapi.com/products";
//         if (category) {
//           url += `?category=${category}`;
//         }
//         const response = await fetch(url);
//         const data = await response.json();
//         setProductList(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchProducts();
//   }, [category]);

//   return (
//     <div>
//       <h1>Item list container</h1>
//       <ItemCount />
//       <ItemList productList={productList} />
//     </div>
//   );
// };

// export default ItemListContainer;

// import { useState,useEffect } from "react";
// import ItemCount from "../ItemCount/ItemCount";
// import ItemList from "../ItemList/ItemList";
// import { useParams } from "react-router-dom";

// const ItemListContainer = () => {
//   const [productList, setProductList] = useState([]);
//   const {id} = useParams()
//   const fetchProducts = () =>{
//     return fetch(`http://fakestoreapi.com/products/category/${id}`)
//     .then((response) => response.json())
//     .then((data) => setProductList(data))
//     .catch((error) => console.log(error));
//   };
//   useEffect(() => {
//     fetchProducts();
//   },[]);
//   return
//   <div>
//     <h1>Item list Container</h1>
//     <ItemCount/>
//     <ItemList productList={productList}/>
//   </div>
// };

// export default ItemListContainer;

//------------------------------------------------------------------------------OR--------------------------------------

// import React, { useState, useEffect } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from '../../Config/configFirebase';
// import ItemList from '../ItemList/ItemList';

// const ItemListContainer = () => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log("File: ItemListContainer", items)


//   useEffect(() => {
//     setLoading(true);
//     const fetchProducts = async () => {
//       try {
//         const productsCollection = collection(db, 'products');
//         const snapshot = await getDocs(productsCollection);
//         const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setItems(productsData);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching products from Firebase:', error);
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ItemList items={items} />
//       )}
//     </div>
//   );
// };

// export default ItemListContainer;

//--------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Config/configFirebase'; //Me lo marca como error pero sin esto no funciona y otra ruta no me la acepta
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); // Obteniene el parámetro 

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        let querySnapshot;

        if (id) { // Si hay un parámetro de categoría
          const q = query(productsCollection, where('Categoria', '==', id));
          querySnapshot = await getDocs(q);
        } else { // Si no hay un parámetro de categoría 
          querySnapshot = await getDocs(productsCollection);
        }

        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setItems(productsData);
        setLoading(false);
      } catch (error) {
        console.error('Error de fetching products del Firebase:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [id]); // Aca se actualizara el cambio en la URL

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;

