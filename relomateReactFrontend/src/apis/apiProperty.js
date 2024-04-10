import React, { useState, useEffect } from "react";
import axios from "axios";
import "../ComponentStyles/propertyDisplay.css";
import SideDetails from "../Components/sideDetails";
import AddPropertyInput from "../Components/addObject";

export default function PropertyListings() {
  const [responseData, setResponseData] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [addProperty, setAddProperty] = useState(false);
  const [responseDataSecondary, setResponseDataSecondary] = useState(null);
  const [responseDataThirdly, setResponseDataThirdly] = useState(null);
  const [loading, setLoading] = useState(true);

  const geoLabel = localStorage.getItem("selectedGeoLabel");
  const cachedData = localStorage.getItem("cachedData");
  const parsedData = JSON.parse(cachedData);
  const geoIdentifier = parsedData.data.geoSuggestion[0].geoIdentifier;
  const priceMin = localStorage.getItem("minPrice");
  const priceMax = localStorage.getItem("maxPrice");
  const radius = localStorage.getItem("radiusSetting");
  const propertyType = localStorage.getItem("propertyTypeSetting");

  const numberOfBeds = localStorage.getItem("bedsMin");

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
          priceMin: priceMin,
          bedsMax: numberOfBeds,
          priceMax: priceMax,
          propertySubType: propertyType,
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
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddProperty = (property) => {
    setSelectedProperty(property);
    setAddProperty(true);
  };

  const handleLookProperty = (property) => {
    findBroadBand(property); // Pass the property object to findBroadBand
  };

  const findBroadBand = async (property) => {
    try {
      const options = {
        method: "GET",
        url: "https://zoopla.p.rapidapi.com/properties/get-broadband",
        params: {
          listing_id: property.listingId,
        },
        headers: {
          "X-RapidAPI-Key":
            "766170e95amsh648219864b9d8e5p120019jsn83defc49990b",
          "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setResponseDataSecondary(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const findSpecifics = async (property) => {
    try {
      const options = {
        method: "GET",
        url: "https://zoopla.p.rapidapi.com/properties/v2/detail",
        params: {
          listingId: property.listingId,
        },
        headers: {
          "X-RapidAPI-Key":
            "766170e95amsh648219864b9d8e5p120019jsn83defc49990b",
          "X-RapidAPI-Host": "zoopla.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      setResponseDataThirdly(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSpecifics = (property) => {
    findSpecifics(property); // Pass the property object to findBroadBand
  };

  useEffect(() => {
    fetchData();
  }, [geoLabel, geoIdentifier, priceMax, radius, propertyType]);
  return (
    <>
      {loading ? ( // Conditionally render loading message
        <div>Loading...</div>
      ) : (
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
                        onClick={() => {
                          handleLookProperty(property);
                          handleSpecifics(property);
                        }}
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
                              src={require("../assets/bathroomIcon2.webp")}
                              alt="Bathroom"
                            />
                            {property.attributes.livingRooms}
                            <img
                              src={require("../assets/livingRoomIcon.png")}
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
      )}
      <div>
        <SideDetails
          data={responseDataSecondary}
          dataSecond={responseDataThirdly}
        />
      </div>
    </>
  );
}
