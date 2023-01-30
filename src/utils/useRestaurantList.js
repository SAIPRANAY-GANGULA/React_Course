import { useContext, useEffect, useState } from "react";
import { RESTAURANT_LIST_API } from "../constants";
import SearchInputContext from "./SearchInputContext";

const useRestaurantList = () => {
  const [restaurants, setRestaurants] = useState([]);

  const { searchText } = useContext(SearchInputContext);

  useEffect(() => {
    const getData = setTimeout(() => {
      getRestaurants();
    }, 500);

    return () => clearTimeout(getData);
  }, [searchText]);

  async function getRestaurants() {
    try {
      const data = await fetch(RESTAURANT_LIST_API());
      const json = await data.json();
      const restaurantList = json?.data?.cards;
      filterRestaurants(searchText, restaurantList);
    } catch (error) {
      console.log(error);
    }
  }

  function filterRestaurants(searchText, restaurantsList) {
    const filterRestaurants = restaurantsList.filter((restaurant) =>
      restaurant?.data?.data?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase().trim())
    );
    setRestaurants(filterRestaurants);
  }

  return restaurants;
};

export default useRestaurantList;
