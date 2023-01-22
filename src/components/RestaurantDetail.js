import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import useRestaurantDetail from "../utils/useRestaurantDetail";

const ShimmerRestaurantDetail = () => {
  return (
    <div className="center-content flex h-full">
      <div
        style={{
          width: "15rem",
          height: "10rem",
        }}
        className="h-40 my-auto animated-bg"
      />
      <div className="mx-10 my-auto flex flex-col">
        <p
          style={{ margin: "0.5rem 0", width: "10rem" }}
          className="w-40 text-white text-3xl my-2 animated-bg animated-bg-text"
        ></p>
        <p
          style={{ margin: "0.5rem 0", width: "10rem" }}
          className="text-white text-base my-2 animated-bg animated-bg-text"
        ></p>
        <p
          style={{ margin: "0.5rem 0", width: "10rem" }}
          className="text-white text-base my-2 animated-bg animated-bg-text"
        ></p>
        <p
          style={{ margin: "0.5rem 0", width: "10rem" }}
          className="text-white text-base my-2 animated-bg animated-bg-text"
        ></p>
      </div>
    </div>
  );
};

export const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = useRestaurantDetail(id);

  return (
    <div className="w-screen h-60 bg-slate-800 my-10">
      {!restaurant ? (
        <ShimmerRestaurantDetail />
      ) : (
        <div className="center-content flex h-full">
          <img
            className="h-40 my-auto"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
            alt="img"
          />
          <div className="mx-10 my-auto">
            <p className="text-white text-3xl my-2">{restaurant?.name}</p>
            <p className="text-white text-base my-2">
              {restaurant?.cuisines.join(", ")}
            </p>
            <p className="text-white text-base my-2">
              {restaurant?.locality}, {restaurant?.city}
            </p>
            <p className="text-white text-base my-2">
              {restaurant?.costForTwoMsg}
            </p>
          </div>
        </div>
      )}

      {/*<div>*/}
      {/*  <h1>Menu</h1>*/}
      {/*  <ul>*/}
      {/*    {Object.values(restaurant?.menu?.items).map((item) => (*/}
      {/*      <li key={item.id}>{item.name}</li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</div>*/}
    </div>
  );
};
