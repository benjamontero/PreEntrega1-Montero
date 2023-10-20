import React, { useContext, useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CartCtx } from "../../context/CartContext";

export const ItemListContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const { listProducts, setListProducts } = useContext(CartCtx);

  useEffect(() => {
    const productsRef = collection(db, "productos");

    //consulta para filtrar
    if (id === undefined) {
      getDocs(productsRef).then((resp) => {
        const productsFirebase = resp.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setListProducts(productsFirebase);
        setIsLoading(false);
      });
    } else {
      const q = query(productsRef, where("category", "==", id));
      getDocs(q).then((resp) => {
        const productsFirebase = resp.docs.map((product) => ({
          id: product.id,
          ...product.data(),
        }));
        setListProducts(productsFirebase);
        setIsLoading(false);
      });
    }
  }, [id]);
  return (
    <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {isLoading ? (
        <Loading />
      ) : (
        listProducts.map((producto) => (
          <ItemList
            key={producto.id}
            id={producto.id}
            name={producto.name}
            price={producto.price}
            category={producto.category}
            image={producto.image}
          ></ItemList>
        ))
      )}
    </div>
  );
};
