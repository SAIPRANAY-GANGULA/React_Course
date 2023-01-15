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

const RestaurantCardComponent = ({
  cloudinaryImageId,
  name,
  cuisines,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="restaurant_img" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString} minutes</h4>
    </div>
  );
};

const BodyComponent = () => {
  return (
    <div className="restaurant-list">
      {restaurantList.map((restaurant) => (
        <RestaurantCardComponent
          {...restaurant.data}
          key={restaurant.data.id}
        />
      ))}
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
