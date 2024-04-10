// SideDetails.js
import React from "react";
import "../ComponentStyles/sideDetail.css";

export default function SideDetails({ data, dataSecond }) {
  return (
    <>
      <div className="mapSuggestions">
        {data && dataSecond && dataSecond.data && (
          <div>
            <h1>Description: </h1>
            <hr />
            <h2>Things you may like</h2>
            <div className="pros">
              <img src={require("../assets/checkIcon.png")} alt="check icon" />
              <p> This property has {data.name} broadband </p>
              <hr />
            </div>
            <hr></hr>

            <ul id="details">
              {dataSecond.data.listingDetails.features.bullets.map(
                (bullet, index) => (
                  <li key={index}>{bullet}</li>
                )
              )}
            </ul>
            <hr></hr>
            <div className="watchers">
              <p>
                FDM'ers looking at this property{" "}
                {dataSecond.data.listingDetails.viewCount.viewCount30day}
              </p>

              <div className="transportation">
                <img
                  src={require("../assets/nationalRail.png")}
                  alt="check icon"
                  style={{ marginRight: "10px" }}
                />
                <p>
                  {dataSecond.data.listingDetails.transports[0].title}:
                  {dataSecond.data.listingDetails.transports[0].distanceInMiles}{" "}
                  miles
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
