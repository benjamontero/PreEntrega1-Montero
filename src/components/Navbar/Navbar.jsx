import React from "react";
import logoMatear from "../../assets/logo-matear.svg";
import "./style-navbar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar flex justify-between px-3 py-3 m-4 shadow-xl rounded-lg">
      <Link  to={"/"} className="flex">
        <img className="" src={logoMatear} alt="MatearLogo" />
        <h1 className="text-2xl pt-3 font-bold">MATEAR</h1>
      </Link>
      
      <div className="mx-auto flex items-center justify-between text-gray-900">
        
        <ul className="items-center gap-6 flex">
          <li><Link to={"/"} className="flex items-center" href="#">Home</Link></li>
          <li><Link to={"/"} className="flex items-center" href="#">Tienda</Link></li>
          <li><Link to={"/category/mates"} className="flex items-center" href="#">Mates</Link></li>
          <li><Link to={"/category/termos"} className="flex items-center" href="#">Termos</Link></li>
          <li><Link to={"/404"} className="flex items-center" href="#">Bombillas</Link></li>

        </ul>
      </div>
      <CartWidget />
    </nav>
  );
};
