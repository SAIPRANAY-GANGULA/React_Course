import * as Restro from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useEffect,
  useState,
} from "react"; /* Imported using import * as namespace  */
import "./RestaurantList.css";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_API } from "../constants";

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);

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
    <>
      <div className="search">
        <FontAwesomeIcon icon="search" />
        <input
          type="text"
          placeholder="Search for restaurant, cuisine or a dish"
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
      </div>
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
    </>
  );
};

export default BodyComponent;
