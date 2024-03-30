import React from "react";

import "../index.css";
import "../ComponentStyles/SavedProperties.css";

function SavedProperties() {
  return (
    <>
      <div className="container" style={{ overflowX: "scroll" }}>
        <div className="row flex-nowrap" style={{ width: "auto" }}>
          <div className="col">
            <div className="card" style={{ width: `18rem` }}>
              <img
                src={require("../assets/propertyPreview.jpeg")}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">
                  Note to self: I like the view from the top floor
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: `18rem` }}>
              <img
                src={require("../assets/propertyPreview.jpeg")}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">
                  Note to self: I like the view from the top floor
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: `18rem` }}>
              <img
                src={require("../assets/propertyPreview.jpeg")}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">
                  Note to self: I like the view from the top floor
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: `18rem` }}>
              <img
                src={require("../assets/propertyPreview.jpeg")}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">
                  Note to self: I like the view from the top floor
                </p>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card" style={{ width: `18rem` }}>
              <img
                src={require("../assets/propertyPreview.jpeg")}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <p className="card-text">
                  Note to self: I like the view from the top floor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedProperties;
