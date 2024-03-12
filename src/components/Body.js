import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// UTILS
import { addRestaurantData } from "../utils/restaurantDataSlice.js";
import { API_URl } from "../utils/config.js";

// COMPONENTS
import StarterRestaurants from "./StarterRestaurants";
import TopRestaurants from "./TopRestaurants.js";
import Shimmer from "./Shimmer.js";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const store = useSelector((store) => store?.restaurant?.restaurants);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getRestaurants() {
    try {
      const data = await fetch(API_URl);
      const json = await data.json();
      dispatch(
        addRestaurantData({
          starterRestaurants:
            json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,

          topRestaurants:
            json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants,
        })
      );
    } catch (error) {
      navigate("/error");
    }
  }

  useEffect(() => {
    if (!store) {
      getRestaurants();
    }
  }, []);

  return !store ? (
    <Shimmer />
  ) : (
    <>
      <StarterRestaurants />
      <TopRestaurants />
    </>
  );
};

export default Body;
