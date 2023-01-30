import * as Restro from "./RestaurantCard";
import { useContext } from "react"; /* Imported using import * as namespace  */
import "./RestaurantList.css";
import Shimmer from "./Shimmer";
import SearchInputContext from "../utils/SearchInputContext";
import useRestaurantList from "../utils/useRestaurantList";

const BodyComponent = () => {
  const { searchText } = useContext(SearchInputContext);
  const restaurants = useRestaurantList();

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
