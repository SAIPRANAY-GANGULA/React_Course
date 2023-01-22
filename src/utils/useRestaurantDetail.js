import { useEffect, useState } from "react";
import { FETCH_RESTAURANT_DETAIL_URL } from "./helper";

const useRestaurantDetail = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantDetail();
  }, []);

  async function getRestaurantDetail() {
    const data = await fetch(FETCH_RESTAURANT_DETAIL_URL(resId));
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurantDetail;
