import { Link, useParams } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { products } from "../products";
import { useEffect, useState } from "react";
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer";
import { Item } from "../components/Item/Item";
import { Loading } from "../components/Loading";

export const Home = () => {
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
    <div>
      <Layout>
        <ItemListContainer>
          {isLoading ? (
            <Loading />
          ) : (
            productos.map((producto) => (
              <Item
                key={producto.id}
                id={producto.id}
                name={producto.name}
                price={producto.price}
                category={producto.category}
                image={producto.image}
              ></Item>
            ))
          )}
        </ItemListContainer>
      </Layout>
    </div>
  );
};
