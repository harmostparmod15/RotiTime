import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "./config";
import { useNavigate } from "react-router-dom";

const useRestaurantDetail = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  const navigate = useNavigate();

  try {
    //  get data from api
    useEffect(() => {
      getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
      const data = await fetch(FETCH_MENU_URL + resId);
      const json = await data.json();
      setRestaurant(json.data);
    }

    //  return restaurant data
    return restaurant;
  } catch (error) {
    navigate("/");
  }
};

export default useRestaurantDetail;
