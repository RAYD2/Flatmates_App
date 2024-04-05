import { React, useState, useHistory, useEffect } from "react";

import { Link } from "react-router-dom";

import "../index.css";
import "../ComponentStyles/Navbar.css";
import apiCall from "../apis/propertyfind";
function NavBar() {
  const [responseData, setResponseData] = useState(null);
  const [defaultSearch, setDefaultSearch] = useState("Search e.g. Newcastle");

  const handleClick = async () => {
    try {
      const data = await apiCall();
      setResponseData(data);
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="mainNav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand">ReloMate</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Messages</a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Login
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                id="searchButton"
                placeholder={defaultSearch}
                aria-label="Search"
              />
              <Link to="/filter">
                <button
                  className="btn btn-outline-primary"
                  onClick={() => {
                    setDefaultSearch("Barnet");
                    localStorage.setItem(
                      "currentSearch",
                      document.getElementById("searchButton").value
                    );
                  }}
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
