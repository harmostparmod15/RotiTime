import { IMG_CDN_URL } from "../utils/config";

import RatingLogo from "../assets/images/rating-start.png";

const RestaurantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  costForTwo,
}) => {
  return (
    <div className="relative -z-20 w-60  p-4 m-5 shadow-md h-4/5 font-poppins hover:scale-105 transition-all duration-500 hover:shadow-none">
      <img className="rounded-md " src={IMG_CDN_URL + cloudinaryImageId} />
      {/*  text */}
      <div>
        <h2 className="font-extrabold    h-16 pt-2 w[100%]">{name}</h2>
        {/*  average ratings */}
        <div className=" flex gap-2 font-extrabold opacity-80">
          <img className="w-6 h-6 " src={RatingLogo}></img>
          <h1> {avgRating}</h1>
          <h1>{costForTwo}</h1>
        </div>

        {/*  cusines */}
        <h3 className="font-poppins text-xs h-14 pb-12 pt-2">
          {cuisines.slice(0, 3).join(", ")}
        </h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
