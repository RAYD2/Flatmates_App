import { React, useState, useHistory, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../index.css";
import "../ComponentStyles/Navbar.css";
import bars from '../assets/bars.svg';

import apiCall from "../apis/propertyfind";

function NavBar() {
  const [responseData, setResponseData] = useState(null);

  const handleClick = async () => {
    try {
      const data = await apiCall();
      setResponseData(data);
    } catch (error) {
      // Handle errors if any
      console.error("Error occurred:", error);
      // Optionally, update state or show error message to the user
    }
  };

  const location = useLocation();
  // TODO: Hover effects, dynamic css based on location
  // Add links here and routes in App.js

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-title">ReloMate</Link>
          <div className="nav-list">
            <Link to ='/Profile' className={location.pathname === '/Profile' ? 'nav-selected' : 'nav-default'}>Profile</Link>
            <Link to ='/Messages' className={location.pathname === '/Messages' ? 'nav-selected' : 'nav-default'}>Messages</Link>
            <Link to ='/Login' className={location.pathname === '/Login' ? 'nav-selected' : 'nav-default'}>Login</Link>
          </div>
        </div>

        <div className="nav-right">     

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search e.g. Newcastle"
              aria-label="Search"
            />
            <Link to="/properties">
              <button
                className="btn btn-outline-primary"
                onClick={handleClick}
              >
                Search
              </button>
            </Link>
          </form>
         

          <button className="menu-button">
            <img src={bars} style={{ width: '40px', height: '40px', padding: '0px' }}/>
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
