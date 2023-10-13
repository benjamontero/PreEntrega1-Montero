import React, { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useParams } from "react-router-dom";
import { products } from "../../products";
import {ItemList} from "../ItemList/ItemList"


export const ItemListContainer = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);

  const searchCategory = products.filter(
    (prod) => prod.category.toLowerCase() === id
  );

  useEffect(() => {
    setTimeout(() => {
      console.log(searchCategory);
      //Validamos si el searchCategory esta vacio, que nos muestre la pagina con todos los productos, caso contrario que setee la nueva categoria
      if (searchCategory.length === 0) {
        setProductos(products);
      } else {
        setProductos(searchCategory);
      }
      setIsLoading(false);
    }, 2000);
  }, [id]);
  return (
    <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
      {isLoading ? (
        <Loading />
      ) : (
        productos.map((producto) => (
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
