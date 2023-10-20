import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { db } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [producto, setProducto] = useState({});

  useEffect(() => {
    const productoRef = doc(db, "productos", id);

    getDoc(productoRef).then((response) => {
      if (response.exists()) {
        const product = { id: response.id, ...response.data() };
        setProducto(product);
        setIsLoading(false);
      } else {
        console.log("producto no existe");
      }
    });
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ItemDetail
          id={producto.id}
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
