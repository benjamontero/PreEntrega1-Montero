import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { products } from "../../products";

export const ItemDetailContainer = ({ children }) => {

  const { id } = useParams();
  const[isLoading, setIsLoading] = useState(true)
  const [producto, setProducto] = useState({})


  const searchProduct = products.find(
    (prod) => prod.id === parseInt(id)
  );

  useEffect(()=>{
    setTimeout(()=>{
      console.log(searchProduct);
      setProducto (searchProduct);
      setIsLoading(false)
    },2000)
  },[]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ItemDetail
          name={producto.name}
          price={producto.price}
          category={producto.category}
          image={producto.image}
          description={producto.description}
          stock={producto.stock}
        ></ItemDetail>
      )}
    </div>
  );
};
