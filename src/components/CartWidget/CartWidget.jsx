import React from "react";
import cartIcon from "../../assets/cartIcon.svg";

export const CartWidget = () => {
  return (
    <div className="flex p-4 mr-2">
      <a className="" href="#">
        <img className="h-9" src={cartIcon} alt="" />
      </a>
      <p className="pl-2 pt-1 text-xl">0</p>
    </div>
  );
};
