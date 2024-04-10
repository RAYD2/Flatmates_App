import { React, useState, useHistory, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../index.css";
import "../ComponentStyles/Navbar.css";
import bars from "../assets/bars.svg";

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

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();
  // TODO: Hover effects, dynamic css based on location
  // Add links here and routes in App.js

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-title">
            ReloMate
          </Link>
          <div className="nav-list">
            <Link
              to="/Profile"
              className={
                location.pathname === "/Profile"
                  ? "nav-selected"
                  : "nav-default"
              }
            >
              Profile
            </Link>
            <Link
              to="/Messages"
              className={
                location.pathname === "/Messages"
                  ? "nav-selected"
                  : "nav-default"
              }
            >
              Messages
            </Link>
            <Link
              to="/login"
              className={
                location.pathname === "/Login" ? "nav-selected" : "nav-default"
              }
            >
              Login
            </Link>
          </div>
        </div>

        <div className="nav-right">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              id="searchButton"
              placeholder="Search e.g. Newcastle"
              aria-label="Search"
            />
            <Link to="/filter">
              <button
                className="button_search"
                onClick={() => {
                  setDefaultSearch("Barnet");
                  localStorage.setItem(
                    "currentSearch",
                    document.getElementById("searchButton").value,
                    handleClick
                  );
                }}
              >
                Search
              </button>
            </Link>
          </form>

          <button className="menu-button" onClick={toggleMenu}>
            <img src={bars} />
            {isOpen && (
              <div className="dropdown-container">
                <div className="dropdown-list">
                  <button className="dropdown-default" onClick={toggleMenu}>
                    Close
                  </button>
                  <Link
                    to="/Profile"
                    className={
                      location.pathname === "/Profile"
                        ? "dropdown-selected"
                        : "dropdown-default"
                    }
                  >
                    Profile
                  </Link>
                  <Link
                    to="/Messages"
                    className={
                      location.pathname === "/Messages"
                        ? "dropdown-selected"
                        : "dropdown-default"
                    }
                  >
                    Messages
                  </Link>
                  <Link
                    to="/Login"
                    className={
                      location.pathname === "/Login"
                        ? "dropdown-selected"
                        : "dropdown-default"
                    }
                  >
                    Login
                  </Link>
                </div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
