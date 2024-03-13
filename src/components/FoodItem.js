import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/config";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ id, name, imageId, price, defaultPrice }) => {
  const dispatch = useDispatch();

  const clearCartItems = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-11/12 p-2 m-5 shadow-md h-4/5 font-poppins flex gap-8 0">
      <img className="w-4/12" src={IMG_CDN_URL + imageId} />
      <div className="w-8/12 ">
        <h2 className="font-bold   ">{name}</h2>
        {!defaultPrice ? (
          <h4 className=" text-lg ">₹{price / 100}</h4>
        ) : (
          <h4 className=" text-lg ">₹{defaultPrice / 100}</h4>
        )}
        <button
          onClick={() => clearCartItems(id)}
          className="bg-red-500 text-white py-1 rounded-lg px-4 "
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
