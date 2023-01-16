import * as Restro from "./RestaurantCard";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  useEffect,
  useState,
} from "react"; /* Imported using import * as namespace  */
import "./Body.css";

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
    const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.429888959888363&lng=78.457962423563&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    const restaurantList = json?.data?.cards;
    filterRestaurants(searchText, restaurantList);
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
          <FontAwesomeIcon icon="search"/>
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
        <div className="restaurant-list">
          {restaurants.map((restaurant) => {
            const restaurantData = restaurant?.data?.data;
            return (
                <Restro.RestaurantCardComponent
                    {...restaurantData}
                    key={restaurantData?.uuid}
                />
            );
          })}
        </div>
      </>
  );
};

export default BodyComponent;
