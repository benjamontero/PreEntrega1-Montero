import { useState } from "react";
import { products } from "./products";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
 const productPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });  
  
  productPromise
  .then((res) => console.log(res));

  return (
    <>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos a Matear!" />
    </>
  );
}

export default App;
