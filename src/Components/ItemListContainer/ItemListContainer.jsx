import { useState, useEffect } from "react";
import ItemCount from "../ItemCount/ItemCount";
import Itemlist from "../ItemList/ItemList";

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  
  const fetchProducts = () => {
    return fetch(`https://fakestoreapi.com/products`)
    .then((response) => response.json())
    .then((data) => setProductList(data))
    .catch((error) => console.log(error));
  };
  
  useEffect(()=> {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Iteam list container</h1>
      <ItemCount/>
      <Itemlist productList={productList}/>
    </div>
  );
};

export default ItemListContainer;
