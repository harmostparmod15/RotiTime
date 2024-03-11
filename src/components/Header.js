import { Link } from "react-router-dom";

// ASSETS
import cartImg from "../assets/images/cart-logo.jpeg";
import Titlelogo from "../assets/images/rotieTime-logo.png";

const Header = () => {
  return (
    <div className="px-24  pt-2 top-0 sticky z-20   flex justify-between bg-slate-200    shadow-md font-poppins">
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
          <Link className="text-red-600 " to="/">
            Home
          </Link>{" "}
        </li>
        <li>
          <Link className="links" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact">
            Contact{" "}
          </Link>
        </li>

        <li>
          {" "}
          <Link className="links" to="/instamart">
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
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
