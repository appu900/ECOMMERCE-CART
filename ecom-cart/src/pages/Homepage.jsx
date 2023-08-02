import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { useState } from "react";
import { useEffect } from "react";
import ProductCard from "../component/ProductCard";

const Homepage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const state = useSelector((state) => state);
  console.log(state.product.items);
  const data = state.product.items;

  return (
    <div>
      <div className="grid xl:grid-cols-4 grid-cols-2 xs:grid-cols-1 px-12 gap-20 mt-20">
        {data?.map((product) => (
          <div>
            <ProductCard
              name={product.name}
              image={product.image}
              id={product.id}
              key={product.id}
              desc={product.desc}
              price={product.price}
              item={product}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
