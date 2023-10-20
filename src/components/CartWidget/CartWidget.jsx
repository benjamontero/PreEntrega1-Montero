import React, { useContext, useEffect, useState } from "react";
import cartIcon from "../../assets/cartIcon.svg";
import { Link } from "react-router-dom";
import { CartCtx } from "../../context/cartContext";

export const CartWidget = () => {

    const { cart } = useContext(CartCtx);
    const [cartQuantity, setCartQuantity] = useState(0);
  
    useEffect(() => {
      const quantityOnCart = cart.reduce((acc, prod) => acc + prod.cantidad, 0);
      setCartQuantity(quantityOnCart);
    }, [cart]);

  return (
    <div className="flex p-4 mr-2">
      <Link to={"/cart"} className="" href="#">
        <img className="h-10 inline" src={cartIcon} alt="" />
      </Link>
      <p className="pl-2 pt-2 text-xl">{cartQuantity}</p>
    </div>
  );
};
