import { React, useEffect, useState } from "react";
import axios from "axios";
import "../index.css";
import "../ComponentStyles/SavedProperties.css";

function SavedProperties() {
  const [savedListings, setSavedListings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/saved-listings/")
      .then((response) => {
        setSavedListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching saved listings:", error);
      });
  }, []);

  return (
    <>
      <div className="container" style={{ overflowX: "scroll" }}>
        <div className="row flex-nowrap" style={{ width: "auto" }}>
          {savedListings.map((savedListing) => (
            <div className="col" key={savedListing.id}>
              <div className="card" style={{ width: `18rem` }}>
                <img
                  src={savedListing.mainImage}
                  className="card-img-top"
                  alt="Property Preview"
                ></img>
                <div className="card-body">
                  <p className="card-text">{savedListing.personalNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SavedProperties;
