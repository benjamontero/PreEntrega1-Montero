import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCtx } from "../../context/CartContext";
export const CartList = () => {
  const { cart, emplyCart, totalPrice } = useContext(CartCtx);

  const handleEmplyCart = () => {
    emplyCart();
  };

  return (
    <div className="text-center">
      <h1 className="font-semibold text-4xl py-3">Carrito</h1>
      {cart.map((prod) => (
        <div key={prod.id} className="py-2">
          <h2 className="font-semibold">{prod.name}</h2>
          <h2>Precio: USD: {prod.price}</h2>
          <h2>Cantidad: {prod.cantidad}</h2>
          <h2>Precio Total: {prod.price * prod.cantidad}</h2>
        </div>
      ))}
      {cart.length !== 0 && (
        <h1 className="font-semibold text-4xl py-3">
          Total Compra: USD {totalPrice()}
        </h1>
      )}
      <div className="py-2 ">
        <button
          onClick={handleEmplyCart}
          className="py-2 px-4 mr-2 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300"
        >
          Vaciar Carrito
        </button>
        <Link
          to={"/checkout"}
          className="py-2 px-4 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300"
        >Finalizar Compra
        </Link>
      </div>
    </div>
  );
};
