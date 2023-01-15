import React from "react";
import ReactDOM from "react-dom/client";
import { IMG_CDN_URL, restaurantList } from "./constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <a className="logo" href="/"></a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCardComponent = (props) => {
  return (
    <div className="card">
      {console.error(props)}
      <img
        src={IMG_CDN_URL + props.restaurant.cloudinaryImageId}
        alt="restaurant_img"
      />
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.lastMileTravelString} minutes</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      <RestaurantCardComponent
        restaurant={restaurantList[0].data}
        list={restaurantList}
      />
      <RestaurantCardComponent restaurant={restaurantList[1].data} />
    </div>
  );
};

const AppComponent = () => {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppComponent());
