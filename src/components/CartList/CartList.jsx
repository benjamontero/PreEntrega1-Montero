import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartCtx } from "../../context/CartContext";
import matearError from '../../assets/matearError.svg'

export const CartList = () => {
  const { cart, emplyCart, totalPrice } = useContext(CartCtx);

  const handleEmplyCart = () => {
    emplyCart();
  };

  if (cart.length === 0) {
    return (
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-cyan-300 dark:text-primary-500">
          Carrito Vacio
        </h1>
        <div className="flex justify-center">
          <img className="h-48" src={matearError} alt="" />
        </div>
        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Ups... el Mate se cayo
        </p>
        <p className="mb-4 text-lg  text-gray-500 dark:text-gray-400">
          Vuelve a buscar lo que estas necesitando para completar la compra
        </p>
        <Link
          to={"/"}
          className="inline-flex text-w bg-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
        >
          Volver al Home
        </Link>
      </div>
    );
  }

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
        >
          Finalizar Compra
        </Link>
      </div>
    </div>
  );
};
