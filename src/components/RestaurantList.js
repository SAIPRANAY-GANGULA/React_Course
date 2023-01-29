import * as Restro from "./RestaurantCard";
import {
  useContext,
  useEffect,
  useState,
} from "react"; /* Imported using import * as namespace  */
import "./RestaurantList.css";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../constants";
import SearchInputContext from "../utils/SearchInputContext";

const BodyComponent = () => {
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

  return (
    <div className="relative top-20">
      {!restaurants.length && searchText.trim().length ? (
        <div className="center-content | flex justify-center items-center h-96">
          <p className="text-2xl">No match found for "{searchText}"</p>
        </div>
      ) : (
        <div className="restaurant-list">
          {!restaurants.length && !searchText.trim().length
            ? Array(16)
                .fill("")
                .map((v, i) => <Shimmer key={i} />)
            : restaurants.map((restaurant) => {
                const restaurantData = restaurant?.data?.data;
                return (
                  <Restro.RestaurantCardComponent
                    {...restaurantData}
                    key={restaurantData?.uuid}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default BodyComponent;
