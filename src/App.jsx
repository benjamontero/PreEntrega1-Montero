import { useEffect, useState } from "react";
import { products } from "./products";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Item } from "./components/Item/Item";
import { Layout } from "./components/Layout/Layout";
import { Navigation } from "./routes/Navigation";

function App() {
 

  return (
   
 <Navigation/>

  
 
  );
}

export default App;
