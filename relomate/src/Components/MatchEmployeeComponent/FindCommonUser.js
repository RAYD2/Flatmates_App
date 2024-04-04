import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../ComponentStyles/MatchEmployeeCss/MatchingEmployeePage.css";

function FindUser(){
    return (
        <>

        <div className="ProfileContainer">
          <div className='ProfilePicContainer'>
                <div className='Profile_Picture'></div>
                <div className='Profile_Person_Name'>Name Name</div>
            </div>

            <div className='Profile_Description'>
                <div className='AbtMe'>About me</div>
                <div className='MyDescription'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>

        </>
      );
}

export default FindUser