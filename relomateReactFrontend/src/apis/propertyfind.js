// PropertyResult.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyResults.css";

export default function PropertyResult() {
  const [responseData, setResponseData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locationVal = localStorage.getItem("currentSearch");

        // Check if data already exists in localStorage
        const cachedData = localStorage.getItem("cachedData");
        if (cachedData) {
          setResponseData(JSON.parse(cachedData));
          setLoading(false);
        } else {
          const options = {
            method: "GET",
            url: "https://zoopla.p.rapidapi.com/v2/auto-complete",
            params: {
              locationPrefix: locationVal,
            },
            headers: {
              "X-RapidAPI-Key":
                "104aa68165msh8f058d6de7ff6e0p11141ajsn14a8f255e476",
              "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
            },
          };

          const response = await axios.request(options);
          setResponseData(response.data);
          setLoading(false);
          // Cache the response
          localStorage.setItem("cachedData", JSON.stringify(response.data));
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectionChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedGeo = responseData.data.geoSuggestion[selectedIndex];

    if (selectedGeo) {
      localStorage.setItem("selectedGeoIdentifier", selectedGeo.geoIdentifier);
      localStorage.setItem("selectedGeoLabel", selectedGeo.geoLabel);

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
            {responseData.data.geoSuggestion.map((suggestion, index) => (
              <option id="specificLocationSearch" key={index}>
                {suggestion.geoLabel}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
