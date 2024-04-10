import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../ComponentStyles/allProperties.css";

export default function Properties() {
  const [radius, setRadius] = useState("1km");
  const [propertyType, setPropertyType] = useState("flats");
  const [minPrice, setMinPrice] = useState("800pcm");
  const [maxPrice, setMaxPrice] = useState("1000pcm");
  const [bedrooms, setBedrooms] = useState("");

  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    const minPriceValue = parseInt(minPrice.replace("pcm", ""));
    const maxPriceOptions = [];
    for (let i = minPriceValue + 200; i <= 5000; i += 200) {
      maxPriceOptions.push(`${i}`);
    }
    setMaxPriceOptions(maxPriceOptions);
  }, [minPrice]);

  const [maxPriceOptions, setMaxPriceOptions] = useState([]);

  const handleRadiusChange = (event) => {
    setRadius(event.target.value);
    localStorage.setItem("radiusSetting", event.target.value);
  };

  const handlePropertyTypeChange = (event) => {
    setPropertyType(event.target.value);
    localStorage.setItem("propertyTypeSetting", event.target.value);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
    localStorage.setItem("minPrice", event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
    localStorage.setItem("maxPrice", event.target.value);
  };

  const handleBedroomsChange = (event) => {
    setBedrooms(event.target.value);
    localStorage.setItem("bedsMin", event.target.value);
  };

  const handleKeywordsChange = (event) => {
    setKeywords(event.target.value);
  };

  const handleSearch = () => {
    const search = [
      localStorage.getItem("selectedGeoLabel"),
      localStorage.getItem("maxPrice"),
      localStorage.getItem("radiusSetting"),
      localStorage.getItem("propertyTypeSetting"),
      bedrooms,
      keywords,
    ];
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches"));
    if (!recentSearches) {
      recentSearches = [];
    }
    recentSearches.push(search);
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
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
            name="Min Price"
            id="MinPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
          >
            <option value="500">500pcm</option>
            <option value="1000">1000pcm</option>
            <option value="1500">1500pcm</option>
            <option value="2000">2000pcm</option>
            <option value="2500">2500pcm</option>
            <option value="3000">3000pcm</option>
            <option value="3500">3500pcm</option>
            <option value="4000">4000pcm</option>
            <option value="4500">4500pcm</option>
            <option value="5000">5000pcm</option>
            <option value="5500">5500pcm</option>
            <option value="6000">6000pcm</option>
            <option value="6500">6500pcm</option>
            <option value="7000">7000pcm</option>
            <option value="7500">7500pcm</option>
          </select>

          <select
            name="Max Price"
            id="MaxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
          >
            {maxPriceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <label htmlFor="Bedrooms">Bedrooms:</label>
      <select
        id="Bedrooms"
        name="Bedrooms"
        value={bedrooms}
        onChange={handleBedroomsChange}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <label htmlFor="Keywords">Keywords:</label>
      <input
        type="text"
        id="Keywords"
        name="Keywords"
        value={keywords}
        onChange={handleKeywordsChange}
      />

      <Link to="/properties" id="mainOuter">
        <a className="btn btn-success" onClick={handleSearch}>
          Search
        </a>
      </Link>
    </div>
  );
}
