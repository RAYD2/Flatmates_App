import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyDisplay.css";

export default function PropertyListings() {
  const [responseData, setResponseData] = useState(null);
  const geoLabel = localStorage.getItem("selectedGeoLabel");
  const geoIdentifier = localStorage.getItem("selectedGeoIdentifier");
  const fetchData = async () => {
    try {
      const options = {
        method: "GET",
        url: "https://zoopla.p.rapidapi.com/properties/v2/list",
        params: {
          locationValue: geoLabel,
          locationIdentifier: geoIdentifier,
          furnishedState: "Any",
          sortOrder: "newest_listings",
          page: "1",
          section: "to-rent",
          priceMax: "1500",
        },
        headers: {
          "X-RapidAPI-Key":
            "eede8abb63mshd9e268e52b49e1cp14efecjsn60e4f4db31b2",
          "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="property-listings">
      {responseData &&
        responseData.data.listings &&
        responseData.data.listings.regular.map((property) => (
          <div className="card">
            <img
              className="card-img-top"
              src={property.imageUris[0]}
              alt="Property Image"
            ></img>
            <div className="card-body">
              <h5 className="card-title">{property.address}</h5>
              <p className="card-text">
                <div className="attributes">
                  {property.attributes.bedrooms}
                  <img src={require("../assets/bedroomIcon.png")}></img>

                  {property.attributes.bathrooms}
                  <img src={require("../assets/bathroomIcon.png")}></img>

                  {property.attributes.livingRooms}
                  <img src={require("../assets/livingRoom.png")}></img>
                </div>
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
              <p>Price: {property.pricing.label}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
