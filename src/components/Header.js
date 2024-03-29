import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// ASSETS
import cartImg from "../assets/images/cart-logo.jpeg";
import Titlelogo from "../assets/images/rotieTime-logo.png";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="max-w-screen    md:px-24    pt-2 top-0 sticky z-20   flex justify-between bg-slate-200    shadow-md font-poppins">
      {/*  TITLE  */}
      <Link to={"/"}>
        <div className="flex relative  w-40  ">
          <img className="w-16  " src={Titlelogo}></img>
          <h1 className="absolute top-5 right-2  text-xl font-extrabold ">
            Roti Time
          </h1>
        </div>
      </Link>
      {/*  NAV LINKS */}
      <ul className="py-4 flex  justify-between w-6/12 text-xl ">
        <li>
          <Link className="text-red-600 hidden md:block " to="/">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link className=" hidden md:block " to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className=" hidden md:block " to="/contact">
            Contact{" "}
          </Link>
        </li>

        <li>
          {" "}
          <Link className=" hidden md:block " to="/instamart">
            Instamart{" "}
          </Link>{" "}
        </li>
        <li>
          {" "}
          <Link className="flex " to="/cart">
            Cart
            <span>
              {" "}
              <img
                className=" w-12 h-10 rounded-full relative "
                src={cartImg}
              ></img>{" "}
            </span>
            <span className="cart-logo  text-white bg-red-500 rounded-full text-center h-7 w-7 ">
              {cartItems.length}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
