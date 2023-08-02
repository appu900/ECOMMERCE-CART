import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { BsBagCheckFill } from 'react-icons/bs';

const ProductCard = ({ name, desc, price, image, id, item }) => {
  const [btnText, setbtnText] = useState("Add to cart");
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setbtnText("Added to Cart");
  };

  // const state = useSelector((state)=>state);
  // console.log(state.cart.cartItems)

  return (
    <div className="w-[300px] h-[500px] cursor-pointer flex flex-col p-4 bg-white shadow-xl hover:shadow-none ">
      <div className=" text-left">
        <h1 className="text-xl font-semibold ml-8 mb-8">{name}</h1>
      </div>
      <div>
        <img src={image} alt="" className="h-[300px]" />
      </div>

      <div className="w-full text-left">
        <p className="text-sm ml-8">{desc}</p>
        <p className="text-xl font-bold ml-8">${price}</p>
      </div>

      <div className="mt-4">
        <button
          onClick={(e) => handleAddToCart({ item })}
          className="px-4 shadow-md rounded-md py-2 w-full bg-black text-white
            active:bg-gray-700 text-center
            "
        >
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
