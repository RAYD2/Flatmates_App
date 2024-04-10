import React from "react";
import "../index.css";
import "../ComponentStyles/SavedSearches.css";

function SavedSearches() {
  const recentSearches = JSON.parse(localStorage.getItem("recentSearches"));

  return (
    <>
      <div className="savedSearchesSection">
        <div className="savedSearchesTitle">Recent Searches</div>
        <div className="container text-center">
          <div className="row row-cols-3">
            {recentSearches !== null &&
              recentSearches.map((search, index) => (
                <div className="col" key={index}>
                  <div className="card">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                      <h4 className="card-text">{search[0]}</h4>
                      <h5 className="card-title">{index[0]}</h5>
                      <p className="card-text">Max Price: {search[1]}</p>
                      <p className="card-text">Within: {search[2]}</p>
                      <p className="card-text">{search[3]}</p>
                      <a href="#" className="btn btn-light" on>
                        Find my Flat!
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedSearches;
