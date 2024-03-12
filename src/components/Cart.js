import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  let [counter, setCounter] = useState(0);

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return cartItems.length === 0 ? (
    // EMPTY CARD WARNING
    <div className="flex font-poppins w-5/12 mx-auto h-96  items-center justify-center text-3xl">
      <div>
        <h1>Your Cart is Empty Add something :)</h1>
        <p className="underline mt-4">
          <Link to="/">Order now</Link>
        </p>
      </div>
    </div>
  ) : (
    //  MAIN CART COMPONENT
    <div
      className="w-10/12 md:w-5/12 border flex flex-col font-poppins  mx-auto my-8 h-screen  overflow-scroll  
    "
    >
      {/*  cart items count and clear all btn */}
      <div className=" flex py-4 justify-between px-4 ">
        <h1 className="font-extrabold  text-lg  md:text-2xl">
          cart items &#40;{cartItems.length}&#41;
        </h1>
        {/*  clear all btn */}
        <button
          className="bg-red-500  text-white md:px-8 w-3/12 h-10 rounded-md  hover:bg-white hover:text-red-500 hover:border  transition-all duration-500"
          onClick={handleClearCart}
        >
          Clear
        </button>
        {/* procedd to payment btn */}
        {cartItems.length !== 0 ? (
          <Link to={"/payment"}>
            <button className="bg-green-500  text-sm px-2  md:px-4 h-10  text-white rounded-lg hover:scale-90 hover:rounded-lg transition-all duration-500">
              Order now
            </button>
          </Link>
        ) : null}
      </div>

      {/*  cart items */}
      <div className="flex h-40 w-full flex-wrap my-12 ">
        {cartItems.map((item) => (
          <FoodItem key={item?.card?.info?.id} {...item?.card?.info} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
