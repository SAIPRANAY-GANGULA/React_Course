import { restaurantList as restroList } from "../constants"; /* Imported using Named Import Map */
import * as Restro from "./RestaurantCard"; /* Imported using import * as namespace  */

const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      {restroList.map((restaurant) => (
        <Restro.RestaurantCardComponent
          {...restaurant.data}
          key={restaurant.data.id}
        />
      ))}
    </div>
  );
};

export default BodyComponent;
