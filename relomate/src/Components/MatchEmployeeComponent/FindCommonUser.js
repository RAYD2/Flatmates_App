import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../ComponentStyles/MatchEmployeeCss/MatchingEmployeePage.css";

// change this line. so it can import profile pic from somewhere better
import img from "../../assets/livingRoom.png"


function FindUser(){
    return (
        <>
        <div className="ProfileContainer">
            <div className='ProfilePicContainer'>
                {/* /* this line. take care */}
                <img className="Profile_Picture" src={img} alt="Profile Pics"></img>

                {/* edit this line too to make name change. */}
                <div className='Profile_Person_Name'>FirstName Surname</div>

            </div>

            {/* edit this line too to make description change. */}
            <div className='Profile_Container'>
                <div className='Title'>About me</div>
                <div className='Detail'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... More
                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Hobbies</div>
                <div className='Detail'>
                    <div>Sport</div>
                    <div>Drama</div>
                    <div>Anime</div>
                    <div>Music</div>
                    <div>Dance</div>
                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Location</div>
                <div className='MyLoc'>XHT101 Apartment</div>
            </div>

        </div>

        <div className="ProfileContainer">
            <div className='ProfilePicContainer'>
                {/* /* this line. take care */}
                <img className="Profile_Picture" src={img} alt="Profile Pics"></img>

                {/* edit this line too to make name change. */}
                <div className='Profile_Person_Name'>FirstName Surname</div>

            </div>

            {/* edit this line too to make description change. */}
            <div className='Profile_Container'>
                <div className='Title'>About me</div>
                <div className='Detail'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... More
                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Hobbies</div>
                <div className='Detail'>
                    <div>Sport</div>
                    <div>Drama</div>
                    <div>Anime</div>
                    <div>Music</div>
                    <div>Dance</div>
                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Location</div>
                <div className='MyLoc'>None - Not living in Apartment</div>
            </div>

        </div>

        

        </>
    );
}

export default FindUser