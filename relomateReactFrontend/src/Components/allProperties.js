import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../ComponentStyles/allProperties.css";

export default function Properties() {
  const [radius, setRadius] = useState("1km");
  const [propertyType, setPropertyType] = useState("flats");
  const [maxPrice, setMaxPrice] = useState("800pcm");

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
    localStorage.setItem("radiusSetting", event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
    localStorage.setItem("propertyTypeSetting", event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    localStorage.setItem("maxPrice", event.target.value);
  };

  return (
    <div className="searchFilterFields">
      <label htmlFor="Radius">Radius:</label>
      <select
        name="Radius"
        id="Radius"
        value={radius}
        onChange={handleRadiusChange}
      >
        <option value="1km">1km</option>
        <option value="3km">3km</option>
        <option value="5km">5km</option>
        <option value="10km">10km</option>
      </select>

      <label htmlFor="PropertyType">Property Type:</label>
      <select
        name="PropertyType"
        id="PropertyType"
        value={propertyType}
        onChange={handlePropertyTypeChange}
      >
        <option value="flats">Apartment</option>
        <option value="semi_detached">Semi-Detached House</option>
        <option value="detached">Detached House</option>
        <option value="terraced">Terraced</option>
        <option value="bungalow">Bungalow</option>
      </select>

      <div className="priceContainer">
        <label id="priceLabel" htmlFor="Price">
          Price:
        </label>
        <div className="priceCalculation">
          <select
            name="Price"
            id="Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          >
            <option value="800pcm">800pcm</option>
            <option value="1000pcm">1000pcm</option>
            <option value="1200pcm">1200pcm</option>
            <option value="1400pcm">1400pcm</option>
            <option value="1600pcm">1600pcm</option>
            <option value="1800pcm">1800pcm</option>
            <option value="2000pcm">2000pcm</option>
            <option value="2200pcm">2200pcm</option>
            <option value="2400pcm">2400pcm</option>
            <option value="2600pcm">2600pcm</option>
            <option value="2800pcm">2800pcm</option>
            <option value="3000pcm">3000pcm</option>
            <option value="3200pcm">3200pcm</option>
            <option value="3400pcm">3400pcm</option>
            <option value="3600pcm">3600pcm</option>
            <option value="3800pcm">3800pcm</option>
            <option value="4000pcm">4000pcm</option>
            <option value="4200pcm">4200pcm</option>
            <option value="4400pcm">4400pcm</option>
            <option value="4600pcm">4600pcm</option>
          </select>
        </div>
      </div>

      <label htmlFor="Volume">Volume:</label>
      <select name="Volume" id="Volume">
        <option value="less3">less than 3</option>
        <option value="less10">less than 10</option>
        <option value="less100">less than 100</option>
      </select>

      <button id="additional">
        <Link to="/properties">Additional Filters</Link>
      </button>
    </div>
  );
}
