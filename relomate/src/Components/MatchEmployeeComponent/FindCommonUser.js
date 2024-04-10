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

                {/* change this to a variable so PROFILE PIC can be changed */}
                <img className="Profile_Picture" src={img} alt="Profile Pics"></img>
                {/* till here */}

                
                {/* Add variable to change NAME */}
                <div className='Profile_Person_Name'>FirstName Surname</div>
                {/* till here */}

            </div>


            <div className='Profile_Container'>
                <div className='Title'>About me</div>

                {/* Change this to variable so BIO can be updated */}
                <div className='Detail'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... More
                </div>
                {/* till here */}

            </div>

            <div className='Profile_Container'>
                <div className='Title'>Hobbies</div>
                <div className='Detail'>

                    {/* Change these to variables so HOBBIES can be changed accordingly */}
                    <div>Sport</div>
                    <div>Drama</div>
                    <div>Anime</div>
                    <div>Music</div>
                    <div>Dance</div>
                    {/* up to this part */}

                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Location</div>

                {/* this need variable so LIVING LOCATION can be changed */}
                <div className='MyLoc'>XHT101 Apartment</div>
                {/* end here */}

            </div>

        </div>

        <div className="ProfileContainer">
            <div className='ProfilePicContainer'>

                {/* change this to a variable so PROFILE PIC can be changed */}
                <img className="Profile_Picture" src={img} alt="Profile Pics"></img>
                {/* till here */}


                {/* Add variable to change NAME */}
                <div className='Profile_Person_Name'>FirstName Surname</div>
                {/* till here */}

            </div>


            <div className='Profile_Container'>
                <div className='Title'>About me</div>

                {/* Change this to variable so BIO can be updated */}
                <div className='Detail'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... More
                </div>
                {/* till here */}

            </div>

            <div className='Profile_Container'>
                <div className='Title'>Hobbies</div>
                <div className='Detail'>

                    {/* Change these to variables so HOBBIES can be changed accordingly */}
                    <div>Sport</div>
                    <div>Drama</div>
                    <div>Anime</div>
                    <div>Music</div>
                    <div>Dance</div>
                    {/* up to this part */}

                </div>
            </div>

            <div className='Profile_Container'>
                <div className='Title'>Location</div>

                {/* this need variable so LIVING LOCATION can be changed */}
                <div className='MyLoc'>None - Not living in Apartment</div>
                {/* end here */}

            </div>

        </div>
        

        </>
    );
}

export default FindUser