import { Link } from "react-router-dom";

export const ItemDetail = ({
  name,
  price,
  category,
  image,
  stock,
  description,
}) => {
  return (
    <div className=" py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className=" rounded-lg mb-4">
              <img src={image} alt="" />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <Link className="w-full py-2 px-4 rounded-full font-bold bg-cyan-200 hover:bg-cyan-300">
                  Agregar a carrito
                </Link>
              </div>
              <div className="w-1/2 px-2">
                <Link to={"/"} className="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">
                  Volver
                </Link>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className="text-gray-600 text-sm mb-4">{category}</p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700">Precio: </span>
                <span className="text-gray-600">${price}</span>
              </div>
              <div>
                <span className="font-bold text-gray-700">Stock:</span>
                <span className="text-gray-600">{stock}</span>
              </div>
            </div>

            <div>
              <span className="font-bold text-gray-700">
                Descripcion del producto:
              </span>
              <p className="text-gray-600 text-sm mt-2">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
