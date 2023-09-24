import { useEffect, useState } from "react";
import { products } from "./products";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Item } from "./components/Item/Item";

function App() {
  const [productosBD, setProductosBD] = useState([]);

  const getData = async () => {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  };
  useEffect(() => {
    getData().then((res) => setProductosBD(res));
  }, []);

  return (
    <>
      <Navbar />
      <ItemListContainer>
        {products.map((producto) => (
          <Item
          id = {producto.id}
          name = {producto.name}
          price = {producto.price}
          stock = {producto.stock}
          category = {producto.category}
          description = {producto.description}
          image={producto.image}
        ></Item>
        ))}
      </ItemListContainer>
    </>
  );
}

export default App;
