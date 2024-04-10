import { React, useState, useHistory, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../ComponentStyles/MatchEmployeeCss/FilterBar.css"


function FilterBar() {


    //change this name as u wish, was originally for searchbar function
    const handleClick = async () => {
        try {
        // does nothing.
        //need to write code that search for data in database here

        } catch (error) {
          console.error("Error occurred:", error);
        }
      };


    return (
        <>
        
        <nav className="nav-SearchBar-Container">

          <form className="form-SearchBar">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search e.g. David Smith "
              aria-label="Search"
            />
            <Link to="/MatchingEmployee">
              <button
                className="button SearchButton"

                // SearchBar onclick function isnt done.
                onClick={null}
              >
                Search
              </button>
            </Link>
          </form>


        </nav>


        <nav className="nav-FilterContainer">
            <div className="nav-Filters">

                {/* All filter. function isnt coded so nothing of these actually works */}
                {/* every "OnClick" is suppose to request data from database and load it onto the page */}
                <select className="nav-FilterItem">
                <option value="option1" onClick={null}>Gender: All</option>
                <option value="option2" onClick={null}>Gender: Male</option>
                <option value="option3" onClick={null}>Gender: Female</option>
                </select>

                <select className="nav-FilterItem" >
                <option id="test" value="option1" onClick={null}>Language: All</option>
                <option value="option2" onClick={null}>Gender: Male</option>
                <option value="option3" onClick={null}>Gender: Female</option>
                </select>

                <select className="nav-FilterItem">
                <option value="option1" onClick={null}>Hobbies: All</option>
                <option value="option2" onClick={null}>Sport</option>
                <option value="option3" onClick={null}>Drama</option>
                <option value="option4" onClick={null}>Anime</option>
                <option value="option5" onClick={null}>Music</option>
                <option value="option6" onClick={null}>Dance</option>
                </select>
            </div>
        </nav>
    

        </>
      );
}


export default FilterBar;