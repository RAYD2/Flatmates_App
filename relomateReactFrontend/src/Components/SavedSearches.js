import React from "react";

import "../index.css";

import "../ComponentStyles/SavedSearches.css";

function SavedSearches() {
  return (
    <>
      <div className="savedSearchesSection">
        <div className="savedSearchesTitle">Saved Searches</div>
        <div className="container text-center">
          <div className="row row-cols-3">
            <div className="col">
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Oldham</h5>
                  <p className="card-text">x bedroom with x baths and stuff</p>
                  <a href="#" className="button">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Barnet</h5>
                  <p className="card-text">x bedroom with x baths and stuff</p>
                  <a href="#" className="button">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Hackney</h5>
                  <p className="card-text">x bedroom with x baths and stuff</p>
                  <a href="#" className="button">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <div className="card-header">Featured</div>
                <div className="card-body">
                  <h5 className="card-title">Peckham</h5>
                  <p className="card-text">x bedroom with x baths and stuff</p>
                  <a href="#" className="button">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedSearches;
