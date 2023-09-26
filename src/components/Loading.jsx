import React from "react";
import logoMatear from "../assets/logo-matear.svg"
export const Loading = () => {
  return (
    <div className="flex justify-center">
    <button type="button" className="" disabled>
        <img src={logoMatear} className="animate-spin h-28 w-28 mr-4 " />
      <h2 className="text-xl">Cargando Productos...</h2>
    </button>
    </div>
  );
};
