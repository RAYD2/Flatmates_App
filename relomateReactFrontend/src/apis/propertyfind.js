import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyResults.css";

export default function PropertyResult() {
  const [responseData, setResponseData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

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
              "1c2366b0bemsh25489af249db09fp15261cjsnaaf9d7761e23",
            "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        setResponseData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSelectionChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedGeo = responseData.data.geoSuggestion[selectedIndex];

    localStorage.setItem("selectedGeoIdentifier", selectedGeo.geoIdentifier);
    localStorage.setItem("selectedGeoLabel", selectedGeo.geoLabel);

    setSelectedOption(selectedGeo);
  };

  return (
    <div className="resultsSuggestion">
      {responseData && responseData.data && responseData.data.geoSuggestion && (
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
