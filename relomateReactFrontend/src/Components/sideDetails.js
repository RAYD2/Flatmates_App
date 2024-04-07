// SideDetails.js
import React from "react";
import "../ComponentStyles/sideDetail.css";

export default function SideDetails({ data }) {
  return (
    <>
      <div className="mapSuggestions">
        {data && (
          <>
            <h1>Description: {data.description}</h1>
            <hr></hr>
            <h2>Things you may like</h2>
            <div className="pros">
              <img src={require("../assets/checkIcon.png")}></img>
              <p> This property has {data.name} broadband </p>
              <hr></hr>
              <p>{data.description}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
