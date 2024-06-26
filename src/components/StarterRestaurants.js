import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/config";

const StarterRestaurants = () => {
  const starterRestaurants = useSelector(
    (store) => store?.restaurant?.restaurants?.starterRestaurants
  );

  if (!starterRestaurants) return null;

  return (
    <div className=" w-10/12 mx-auto font-poppins py-12 ">
      <h1 className="text-xl md:text-3xl text-center md:text-start  font-bold py-12 ">
        What's on your Mind ?
      </h1>

      <div className="w-full  flex overflow-x-scroll ">
        {starterRestaurants.map((rest) => (
          <div key={rest.id} className="   mx-4   text-center ">
            <img className="w-full " src={IMG_CDN_URL + rest?.imageId}></img>
            <h1 className="w-40 opacity-0">{rest.action.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarterRestaurants;
