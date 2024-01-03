import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../../Config/configFirebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const itemDocRef = doc(db, "products", id);
  const [detailedProduct, setDetailedProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try { 
        const docSnapshot = await getDoc(itemDocRef);

        if (docSnapshot.exists()) {
          const data = { id: docSnapshot.id, ...docSnapshot.data() };
          setDetailedProduct(data);
        } else {
          setError("No se encontró el item con el ID proporcionado");
        }
      } catch (error) {
        setError("Error al obtener el item: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemDocRef]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return <ItemDetail itemSelected={detailedProduct} />;
};

export default ItemDetailContainer;

