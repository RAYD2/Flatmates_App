import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "../index.css";
import "../ComponentStyles/Navbar.css";
import bars from "../assets/bars.svg";

import apiCall from "../apis/propertyfind";

function NavBar() {
  const [responseData, setResponseData] = useState(null);
  const [defaultSearch, setDefaultSearch] = useState("Search e.g. Newcastle");
  const loggedId = localStorage.getItem("loggedInUserId");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const inputField = document.getElementById("searchButton");
    if (inputField.value.trim() !== "") {
      localStorage.setItem("currentSearch", inputField.value);
      handleClick();
      navigate("/filter");
    }
  };

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
              to="/"
              className={
                location.pathname === "/" ? "nav-selected" : "nav-default"
              }
            >
              Home
            </Link>
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
              to="/users"
              className={
                location.pathname === "/users"
                  ? "nav-selected"
                  : "nav-default"
              }
            >
              Users
            </Link>

            {loggedId === null ? (
              <Link
                to="/login"
                className={
                  location.pathname === "/login"
                    ? "nav-selected"
                    : "nav-default"
                }
              >
                Login
              </Link>
            ) : (
              <Link
                to="/login"
                className="nav-default"
                onClick={() => localStorage.removeItem("loggedInUserId")}
              >
                Logout
              </Link>
            )}
          </div>
        </div>

        <div className="nav-right">
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              id="searchButton"
              placeholder="Search e.g. Newcastle"
              aria-label="Search"
            />

            <button className="button_search">Search</button>
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
