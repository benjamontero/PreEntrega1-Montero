import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartCtx } from "../../context/cartContext";

export const ItemDetail = ({
  id,
  name,
  price,
  category,
  image,
  stock,
  description,
}) => {
  const { cart, handleAgregar } = useContext(CartCtx);
  const [cantidad, setCantidad] = useState(1);

  //Funciones para sumar y restar cantidad de elementos a agregar
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };
  const handleSumar = () => {
    cantidad < stock && setCantidad(cantidad + 1);
  };


  return (
    <div className=" py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <img src={image} alt="" />
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{category}</p>
            <div className="flex mb-4 mr-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Precio: </span>
                <span className="text-gray-600">${price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Stock:</span>
                <span className="text-gray-600">{stock}</span>
              </div>
            </div>
            <div className="mb-4">
              <span className="font-bold text-gray-700">
                Descripcion del producto:
              </span>
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
            <div className="py-2">
              <div className="flex py-2">
                <button
                  onClick={handleRestar}
                  className=" px-4 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300"
                >
                  -
                </button>
                <span className="text-gray-700 text-sm px-3">{cantidad}</span>
                <button
                  onClick={handleSumar}
                  className=" px-4 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300"
                >
                  +
                </button>
              </div>
              <div className="p-2">
                <button 
                onClick={() => {handleAgregar(id,name,price,cantidad)}}
                className="py-2 px-4 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300">
                  Agregar a carrito
                </button>
              </div>
              <div className="p-2">
                <Link
                  to={"/"}
                  className=" bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300"
                >
                  Volver
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
