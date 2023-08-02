import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();

  const state = useSelector(state => state);
  const cartItmesNumber = state.cart.artTotalQuantity;
  console.log(cartItmesNumber)

  return (
    <div className="w-full p-4 bg-black flex items-center text-white justify-between sticky top-0 ">
      <div onClick={(e) => navigate("/")}>
        <p className="  cursor-pointer text-2xl font-bold tracking-wide">
          SHOPIFY.IN
        </p>
      </div>

      <div className="flex items-center  xl:mr-20 xl:gap-1 ">
        <div className="text-3xl  cursor-pointer" 
        onClick={e=>navigate('/cart')}
        >
          <ion-icon name="bag"></ion-icon>
        </div>
      <p className="h-[25px] w-[25px]   text-center rounded-full bg-pink-700">1</p>
      </div>
    </div>
  );
};

export default Navbar;
