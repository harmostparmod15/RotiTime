import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// UTILS
import { filterData } from "../utils/helper";

import {
  addSearchedRestaurantData,
  clearSearchedRestaurantData,
} from "../utils/restaurantDataSlice";

const TopRestaurants = () => {
  const topRestaurants = useSelector(
    (store) => store?.restaurant?.restaurants?.topRestaurants
  );

  const searchedRestaurant = useSelector(
    (store) => store?.restaurant?.searchQuery
  );

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");
  const [addBlur, setAddBlur] = useState(false);

  const handleSearchRestaurant = (inputQuery) => {
    const data = filterData(inputQuery, topRestaurants);
    // setFilteredRestaurants(data);
    dispatch(addSearchedRestaurantData(data));
    setAddBlur(true);
  };

  const handleClearSearchQuery = () => {
    dispatch(clearSearchedRestaurantData());
    setAddBlur(false);
  };

  if (!topRestaurants) return null;

  return (
    <div className="w-10/12 mx-auto font-poppins relative ">
      {/*  header and search bar */}
      <div className="w-full    flex justify-between   items-baseline">
        <h1 className="text-3xl font-bold py-12 ">
          Top Restaurants Chains Near You
        </h1>
        {/*  search box  */}
        <div className="">
          <input
            type="text"
            className="rounded-l-full px-8 py-2 w-96 border text-black"
            value={searchInput}
            placeholder="Search for Restaurants"
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />

          <button
            className="py-2 px-4  bg-[rgb(229,82,58)] text-white rounded-r-full hover:bg-blue-400 transition-bg duration-300"
            onClick={() => {
              handleSearchRestaurant(searchInput);
              // need to filter the data
              //   const data = filterData(searchInput, allRestaurants);
              // update the state - restaurant varoable
              //   setFilteredRestaurants(data);
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/*  all restaurants */}
      <div
        className={
          " justify-between flex flex-wrap border" + (addBlur && " blur-lg")
        }
      >
        {topRestaurants.map((rest) => {
          return (
            <Link to={"/restaurant/" + rest?.info?.id} key={rest?.info?.id}>
              <RestaurantCard {...rest?.info} />
            </Link>
          );
        })}
      </div>

      {/*  searched restaruants */}
      {addBlur && (
        <div
          onClick={handleClearSearchQuery}
          className="p-12   absolute top-40 bg-opacity-40     w-full   bg-"
        >
          {/* <img
            onClick={handleClearSearchQuery}
            className="w-20 mx-auto cursor-pointer  "
            src={closeBtn}
          ></img> */}
          <div className="flex flex-wrap bg-white shadow-xl">
            {searchedRestaurant.map((rest) => (
              <RestaurantCard key={rest?.info?.id} {...rest?.info} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TopRestaurants;
