import React, { useContext, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { CartCtx } from "../context/cartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const [idPedido, setIdPedido] = useState("");

  const { cart, emplyCart, totalPrice } = useContext(CartCtx);
  const { register, handleSubmit } = useForm();

  const compra = (data) => {
    const pedido = {
      cliente: data,
      productos: cart,
      total: totalPrice(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setIdPedido(doc.id);
      emplyCart();
    });
  };

  if (idPedido) {
    return (
      <Layout>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Muchas gracias por tu Compra
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Tu numero de pedido es: {idPedido}
          </p>
          <Link
            className="block w-full rounded-md bg-cyan-200 px-3.5 py-2.5  text-center text-sm font-semibold  shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            to={"/"}
          >
            Volver a la Home
          </Link>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className=" ">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Finaliza tu Pedido
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Por Favor ingresa tus datos y corrobora tu listado de productos
            seleccionado
          </p>
        </div>
        <div>
          <h1 className="font-semibold text-2xl py-3 text-center">Carrito</h1>
          {cart.map((prod) => (
            <div key={prod.id} className="py-2 text-center">
              <h2 className="font-semibold">{prod.name}</h2>
              <h2>Precio: USD: {prod.price}</h2>
              <h2>Cantidad: {prod.cantidad}</h2>
              <h2>Precio Total: {prod.price * prod.cantidad}</h2>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-cyan-400 text-center">
            Total de Compra : {totalPrice()}
          </h2>
        <h2 className="text-xl font-bold tracking-tight mt-4 text-gray-900 text-center">
            Datos personales
          </h2>
        <form
          onSubmit={handleSubmit(compra)}
          className="mx-auto mt-4 max-w-xl "
        >
          <input
            type="text"
            placeholder="Ingresa tu Nombre"
            name="nombre"
            className="block w-full rounded-md mb-2 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("name")}
          />
          <input
            type="text"
            placeholder="Ingresa tu Apellido"
            name="Apellido"
            className="block w-full rounded-md mb-2 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("lastName")}
          />
          <input
            type="text"
            placeholder="Telefono Movil"
            name="Telefono"
            className="block w-full rounded-md mb-4 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            {...register("phone")}
          />
          <div className="flex">
            <input
              type="email"
              placeholder="Ingresa tu mail"
              name="email"
              className="block w-full rounded-md mb-4 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              {...register("email")}
            />
            <input
              type="email"
              placeholder="Ingresa nuevamente tu mail"
              name="emailVerificacion"
              className="block w-full rounded-md mb-4 border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <button
            type="submit"
            className="block w-full rounded-md bg-cyan-200 px-3.5 py-2.5  text-center text-sm font-semibold  shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Finalizar Compra
          </button>
        </form>
      </div>
    </Layout>
  );
};
