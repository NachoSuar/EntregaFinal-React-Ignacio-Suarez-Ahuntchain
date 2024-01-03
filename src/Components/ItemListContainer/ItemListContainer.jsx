import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../Config/configFirebase'; 
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

