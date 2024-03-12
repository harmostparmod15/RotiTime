import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((store) => store.cart.items);

  // SOME ANIMATION
  const handleAnimation = () => {
    document.querySelector(".viewport").classList.remove("translate-y-96");
    document.querySelector(".text").classList.remove("scale-0");
    document.querySelector(".circle").classList.remove("opacity-0");
  };

  // CLEAR CART ITEMS
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      console.log("nl cart");
      navigate("/");
    }

    const animationTimeOut = setTimeout(() => {
      handleAnimation();
    }, 50);

    handleClearCart();

    return () => {
      clearTimeout(animationTimeOut);
    };
  }, []);

  return (
    <div className="translate-y-96  viewport w-screen h-screen bg-green-400 text-2xl  md:text-7xl font-bold text-white flex flex-col justify-center items-center transition-all duration-700 ">
      <h1 className="scale-0 text transition-all duration-700">
        Your order is on its way
      </h1>
      <div className=" transition-all duration-1000 circle opacity-0 bg-slate-200 animate-ping  w-32 h-32 rounded-full "></div>
    </div>
  );
};

export default Payment;
