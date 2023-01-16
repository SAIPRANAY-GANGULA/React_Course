import React from "react";
import { IMG_CDN_URL } from "../constants";
import "./RestaurantCard.css";

export const RestaurantCardComponent = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
  ribbon,
  aggregatedDiscountInfo,
}) => {
  return (
    <div className="card-position">
      <a className="card-item">
        <div className="inner-card">
          <div className="card-width">
            <div className="restaurant-img">
              <img alt={name} src={IMG_CDN_URL + cloudinaryImageId} />
            </div>
            {ribbon ? (
              <div
                className="promote"
                style={{
                  background: "rgb(58, 60, 65)",
                  color: "rgb(255, 255, 255)",
                  borderColor: "rgb(30, 32, 35) transparent",
                }}
              >
                <div className="text">{ribbon[0].type}</div>
              </div>
            ) : (
              ""
            )}

            <div className="res-detail">
              <div className="res-name">{name}</div>
              <div className="res-cuisines">{cuisines.join(", ")}</div>
            </div>
            <div className="res-others">
              <div
                className={
                  avgRating <= 3.9 && !isNaN(avgRating)
                    ? "rating average-rate"
                    : "rating good-rate "
                }
              >
                <span className="icon-star" />
                <span>{avgRating}</span>
              </div>
              <div>•</div>
              <div>{slaString}</div>
              <div>•</div>
              <div className="for-ppl">{costForTwoString}</div>
            </div>
            {aggregatedDiscountInfo ? (
              <div className="offers">
                <span className="icon-offer-filled icon"></span>
                <span className="text">
                  {aggregatedDiscountInfo?.shortDescriptionList[0].meta}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </a>
    </div>
  );
};
