import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/config";

const StarterRestaurants = () => {
  const starterRestaurants = useSelector(
    (store) => store?.restaurant?.restaurants?.starterRestaurants
  );

  if (!starterRestaurants) return null;

  return (
    <div className=" w-10/12 mx-auto font-poppins py-12">
      <h1 className="text-3xl font-bold py-12 ">What's on your Mind ?</h1>

      <div className="flex flex-row   overflow-x-scroll    w-full ">
        {starterRestaurants.map((rest) => (
          <div
            key={rest.id}
            className="  w-5/12 text-center flex flex-col gap-2"
          >
            <img src={IMG_CDN_URL + rest?.imageId}></img>
            <h1 className="w-40">{rest.action.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarterRestaurants;
