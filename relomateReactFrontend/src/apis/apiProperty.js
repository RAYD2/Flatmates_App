import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyDisplay.css";
import SideDetails from "../Components/sideDetails";
import AddPropertyInput from "../Components/addObject";

export default function PropertyListings() {
  const [responseData, setResponseData] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [addProperty, setAddProperty] = useState(false);
  const geoLabel = localStorage.getItem("selectedGeoLabel");
  const geoIdentifier = localStorage.getItem("selectedGeoIdentifier");
  const priceMax = localStorage.getItem("maxPrice");
  const radius = localStorage.getItem("radiusSetting");
  const propertyType = localStorage.getItem("propertyTypeSetting");

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
          radius: radius,
          priceMax: priceMax,
          propertySubType: propertyType,
        },
        headers: {
          "X-RapidAPI-Key":
            "1c2366b0bemsh25489af249db09fp15261cjsnaaf9d7761e23",
          "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddProperty = (property) => {
    setSelectedProperty(property);
    setAddProperty(true);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="property-listings">
        {responseData &&
          responseData.data.listings &&
          responseData.data.listings.regular.map((property) => (
            <>
              {addProperty && (
                <div className="cardForInput" key={property.id}>
                  {selectedProperty === property && (
                    <AddPropertyInput
                      property={property}
                      setAddProperty={setAddProperty}
                    />
                  )}
                </div>
              )}

              {!addProperty && (
                <>
                  <div className="card" key={property.id}>
                    <img
                      className="card-img-top"
                      src={property.imageUris[0]}
                      alt="Property Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{property.title}</h5>
                      <p className="card-text">
                        <div className="attributes">
                          {property.attributes.bedrooms}
                          <img
                            src={require("../assets/bedroomIcon.png")}
                            alt="Bedroom"
                          />
                          {property.attributes.bathrooms}
                          <img
                            src={require("../assets/bathroomIcon.png")}
                            alt="Bathroom"
                          />
                          {property.attributes.livingRooms}
                          <img
                            src={require("../assets/livingRoom.png")}
                            alt="Living Room"
                          />
                        </div>
                      </p>
                      <div className="details">
                        <p className="btn btn-primary ml-3">View Listing</p>
                        <p
                          className="btn btn-dark"
                          onClick={() => handleAddProperty(property)}
                        >
                          Save Property
                        </p>
                        <p>Price: {property.pricing.label}</p>
                      </div>
                      <hr />
                      <p>{property.address}</p>
                    </div>
                  </div>
                </>
              )}
            </>
          ))}
      </div>
      <div>
        <SideDetails data={responseData} />
      </div>
    </>
  );
}
