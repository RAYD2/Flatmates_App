import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyResults.css";

export default function PropertyResult() {
  const [responseData, setResponseData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationVal = localStorage.getItem("currentSearch");

        const options = {
          method: "GET",
          url: "https://zoopla.p.rapidapi.com/v2/auto-complete",
          params: {
            locationPrefix: locationVal,
          },
          headers: {
            "X-RapidAPI-Key":
              "766170e95amsh648219864b9d8e5p120019jsn83defc49990b",
            "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setResponseData(response.data);
        setLoading(false);
        localStorage.setItem("cachedData", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectionChange = (event) => {
    if (responseData && responseData.data && responseData.data.geoSuggestion) {
      const selectedIndex = event.target.selectedIndex;
      const selectedGeo = responseData.data.geoSuggestion[selectedIndex];

      localStorage.setItem("selectedGeoLabel", selectedGeo.geoLabel);
      localStorage.setItem("radius", selectedGeo.radius);
      localStorage.setItem("maxPrice", selectedGeo.MaxPrice);
      localStorage.setItem("minPrice", selectedGeo.MinPrice);
      localStorage.setItem("bedsMin", selectedGeo.Bedrooms);
      localStorage.setItem("bathroomNumber", selectedGeo.Bathrooms);

      setSelectedOption(selectedGeo);
    }
  };

  return (
    <div className="resultsSuggestion">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Suggestions:</h2>
          <select
            onChange={handleSelectionChange}
            value={selectedOption ? selectedOption.geoLabel : ""}
          >
            {responseData &&
              responseData.data &&
              responseData.data.geoSuggestion &&
              responseData.data.geoSuggestion.map((suggestion, index) => (
                <option key={index}>{suggestion.geoLabel}</option>
              ))}
          </select>
        </div>
      )}
    </div>
  );
}
