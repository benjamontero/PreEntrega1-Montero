import React from "react";
import logoMatear from "../../assets/logo-matear.svg";
import "./style-navbar.css";

import { CartWidget } from "../CartWidget/CartWidget";

export const Navbar = () => {
  return (
    <div className="navbar bg-cyan-100 flex justify-between px-3 py-3 m-4 shadow-md rounded-lg">
      <div className="flex">
        <img className="" src={logoMatear} alt="MatearLogo" />
        <h1 className="text-2xl pt-3 font-bold">MATEAR</h1>
      </div>
      <div className="mx-auto flex items-center justify-between text-gray-900">
        <ul className="items-center gap-6 flex">
          <li className="block p-1 font-sans text-lg font-medium leading-normal text-inherit ">
            <a className="flex items-center" href="#">
              Home
            </a>
          </li>
          <li className="block p-1 font-sans text-lg font-medium leading-normal text-inherit ">
            <a className="flex items-center" href="#">
              Tienda
            </a>
          </li>
          <li className="block p-1 font-sans text-lg font-medium leading-normal text-inherit ">
            <a className="flex items-center" href="#">
              Blog
            </a>
          </li>
          <li className="block p-1 font-sans text-lg font-medium leading-normal text-inherit ">
            <a className="flex items-center" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
      <CartWidget />
    </div>
  );
};
