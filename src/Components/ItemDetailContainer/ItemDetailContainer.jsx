// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "../ItemDetail/ItemDetail";

// const ItemDetailContainer = () => {
//     const [itemSelected, setItemSelected] = useState();
//     const {id} = useParams();

//     const fethcProduct = () => {
//         fetch(`https://fakestoreapi.com/products/${id}`)
//         .then((res) => res.json())
//         .then((producto) => setItemSelected(producto))
//         .catch((err) => console.log(err));
//     };

//     useEffect (() => {
//         fethcProduct();
//     },[]);


//     return (
//         <div>
//             {id && (
//                 <div className="item-detail-container">
//                 <ItemDetail itemSelected={itemSelected}/>
//                 </div>
//             )}
//         </div>
//     );


// };

// export default ItemDetailContainer;




//----------------------------------------------------------------------------------------------

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ItemDetail from "../ItemDetail/ItemDetail";
// import { db } from "../../Config/configFirebase";

// const ItemDetailContainer = () => {
//     const [itemSelected, setItemSelected] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         const fetchProduct = async () => {
//             try {
//                 const productRef = db.collection('productos').doc(id);
//                 const doc = await productRef.get();
//                 if (doc.exists) {
//                     setItemSelected(doc.data());
//                 } else {
//                     console.log('No such document!');
//                 }
//             } catch (error) {
//                 console.log('Error getting document:', error);
//             }
//         };

//         fetchProduct();
//     }, [id]);

//     return (
//         <div>
//             {itemSelected && (
//                 <div className="item-detail-container">
//                     <ItemDetail itemSelected={itemSelected} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ItemDetailContainer;

/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/configFirebase";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const itemDocRef = doc(db, "items", id);
  //Recuperación del param que se mandó por URL
  const [detailedProduct, setDetailedProduct] = useState({});
  //Lamado a la api para cargar el item a describir usando un hook de useEffect
  useEffect(() => {
    const fetchProduct = async () => {
      try { 
        const docSnapshot = await getDoc(itemDocRef);

        if (docSnapshot.exists()) {
          const data = { id: docSnapshot.id, ...docSnapshot.data() };
          setDetailedProduct(data);
        } else {
          console.log("No se encontró el item con el ID proporcionado");
        }
      } catch (error) {
        console.error("Error al obtener el item:", error);
      }
    };

    fetchProduct();
  }, []);
  return <ItemDetail product={detailedProduct} />;
};

export default ItemDetailContainer;
