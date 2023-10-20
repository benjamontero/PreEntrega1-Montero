import { createContext, useState } from "react";

export const CartCtx = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartContext = ({ children }) => {

  const [cart, setCart] = useState(initialCart);
  const [listProducts, setListProducts] = useState([]);

  //Funcion para agregar item al cart
  const handleAgregar = (id, name, price, cantidad) => {
    //genera nueva variable para pushear en caso de que no haya coincidencia
    const itemAdd = { id, name, price, cantidad };
    //incializa y copia todo lo que traer el cart en nueva variable
    const newCart = [...cart]; // Crear una copia nueva del carrito
    //buscador de item en el carrito
    const findCarrito = newCart.find((prod) => prod.id === itemAdd.id);
    if (findCarrito) {
      findCarrito.cantidad += cantidad;
    } else {
      newCart.push(itemAdd);
    }
    setCart(newCart); // Actualizar el carrito con la nueva copia
    localStorage.setItem('cart', JSON.stringify(newCart)); // Guardar la nueva copia en el localStorage
  };

  //Funcion para vaciar cart
  const emplyCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify(cart))
  };
  //Funcion SumarTotales
  const totalPrice = () => cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
  
  return (
    <CartCtx.Provider
      value={{
        listProducts,
        setListProducts,
        cart,
        handleAgregar,
        emplyCart,
        totalPrice
      }}
    >
      {children}
    </CartCtx.Provider>
  );
};
