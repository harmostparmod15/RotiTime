import { useParams } from "react-router-dom";
import starImage from "../assets/images/rating-start.png";
import ShimmerRestaurantDetails from "./ShimmerRestaurantDetails";

import { useDispatch } from "react-redux";

// UTILS
import useRestaurantDetail from "../utils/useRestaurantDetail";
import { IMG_CDN_URL } from "../utils/config";

const RestaurantDetail = () => {
  const params = useParams();
  const resId = params.id;
  const restaurant = useRestaurantDetail(resId);

  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <ShimmerRestaurantDetails />
  ) : (
    <div className="flex flex-col font-poppins relative ">
      <div className="w-full">
        {/* HEADER AREA REST DETAILS BASIC */}
        <div className="pt-8 flex justify-between  w-10/12 mx-auto border border-green-500 px-4 py-4 rounded-lg mt-10">
          {/* RESTAURANT NAME AND AREA */}
          <div>
            <h2 className="text-xl font-bold bg-green-100">
              {restaurant.cards[0]?.card?.card?.info?.name}
            </h2>
            <h2 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.cuisines}
            </h2>
            <h3 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.city}
            </h3>
          </div>
          {/* RESTAURANT RATING */}
          <div className=" rounded-lg flex  items-center">
            <h3 className="text-green-400 font-bold flex gap-1  items-baseline ">
              {restaurant.cards[0]?.card?.card?.info?.avgRating}
              <span>
                <img className="w-4 " src={starImage}></img>
              </span>
            </h3>
            <h3 className="text-lg opacity-80">
              {restaurant.cards[0]?.card?.card?.info?.totalRatings}+
            </h3>
          </div>
        </div>

        {/*  IMAGE AND MENU SECTION */}
        <div className=" w-10/12 mx-auto flex flex-col  justify-around">
          <h1 className="my-12 font-bold text-4xl font-poppins text-center">
            MENU
          </h1>

          {/* MENU DETAILS */}
          <div className="flex mx-auto w-10/12 ">
            {/*  new design */}
            <div className=" w-full flex flex-col justify-between font-poppins">
              {(restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards).map(
                (item) => (
                  <div>
                    {/* MENU ITEMS CONTAINER */}
                    <div className=" mx-auto w-10/12  py-2 flex flex-row justify-between items-center ">
                      {/* MENU ITEM DETAILS */}
                      <div className="w-7/12 flex flex-col">
                        <span className="text-lg font-extrabold">
                          {item?.card?.info?.name}
                        </span>

                        <span className="text-sm font-extralight">
                          {item?.card?.info?.itemAttribute?.vegClassifier}
                        </span>

                        {!item?.card?.info?.defaultPrice ? (
                          <span className="font-bold text-sm underline">
                            ₹{item?.card?.info?.price / 100}
                          </span>
                        ) : (
                          <span className="font-bold text-sm underline">
                            ₹{item?.card?.info?.defaultPrice / 100}
                          </span>
                        )}

                        <span className="opacity-70 text-sm ">
                          {item?.card?.info?.description}
                        </span>
                      </div>

                      {/* MENU IMAGE AND ADD BUTTON */}
                      <div className="relative w-3/12 ">
                        <img
                          className="w-full rounded-lg"
                          src={IMG_CDN_URL + item?.card?.info?.imageId}
                        ></img>

                        <button
                          className="flex py-2 px-4 w-20 text-green-500 rounded-md font-bold border
                           border-green-500 hover:bg-green-500 hover:text-white transition-all duration-500"
                          onClick={() => {
                            addFoodItem(item);
                            document
                              .querySelector(".cart-logo")
                              .classList.add("animate-bounce");
                            setTimeout(() => {
                              document
                                .querySelector(".cart-logo")
                                .classList.remove("animate-bounce");
                            }, 500);
                          }}
                        >
                          add
                        </button>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
