import { restaurantList as restroList } from "../constants"; /* Imported using Named Import Map */
import * as Restro from "./RestaurantCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"; /* Imported using import * as namespace  */

const BodyComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState(restroList);

  function filterRestaurants(searchText) {
    const filterRestaurants = restroList.filter((restaurant) =>
      restaurant.data.name
        .toLowerCase()
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
            filterRestaurants(e.target.value);
          }}
        ></input>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Restro.RestaurantCardComponent
            {...restaurant.data}
            key={restaurant.data.id}
          />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
