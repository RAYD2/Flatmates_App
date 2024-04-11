import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../ComponentStyles/FindUsers.css";
import edit from "../assets/edit.png";
import NavBar from "../Components/Navbar";
import supabase from "../apis/supabaseclient";

const FindUsers = () => {
  //TOD: lOgout and redirect if not logged in

  // Sets id dynamically to reflect logged in user
  const navigate = useNavigate();
  const loggedId = localStorage.getItem("loggedInUserId");
  console.log(loggedId);

  const [profileImage, setProfileImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState("");
  const [filename, setFilename] = useState("");

  const [name, setName] = useState("");
  const [bio, setBio] = useState("Loading...");
  const [location, setLocation] = useState("Loading...");
  const [hobbies, setHobbies] = useState(["Loading..."]);
  const [conGenertacts, setContacts] = useState(["Loading..."]);

  const [currentContent, setCurrentContent] = useState("");
  const [userInput, setUserInput] = useState(currentContent);
  const [hobbiesInput, setHobbiesInput] = useState(false);
  const [contactsInput, setContactsInput] = useState(false);

  const fetchUserData = async () => {
    const accountInfo = await supabase
      .from("accountinfo")
      .select("*")


    const profileDetails = await supabase
      .from("profileDetails")
      .select("*")

      console.log(accountInfo)
      console.log(profileDetails)

    setUserData(accountInfo, profileDetails);
  };

  const fetchImage = async () => {
    console.log("Fetching", filename);

    const imageUrl = await supabase.storage
      .from("profilePicture")
      .getPublicUrl(filename);

    setProfileImage(imageUrl.data.publicUrl);
  };

  // Set state variables
  const setUserData = (accountInfo, profileDetails) => {
    var user = profileDetails.data[0];
    setBio(user.bio);
    setLocation(user.location);
    setHobbies(user.hobbies);
    setContacts(user.contacts);
    setFilename(user.fileName);

    user = accountInfo.data[0];
    setName(`${user.firstname} ${user.surname}`);
  };

  useEffect(() => {
    fetchUserData();
    fetchUserData().then(fetchImage());
  }, []);

  return (
    <>
        <NavBar/>
        <div className="content-container">
            <div className="profile-container">

                <div className="single-profile">
                    <div className="profile-header">
                        <div className="profile-picture-container">
                            <img src={profileImage} className="profile-picture" />
                        </div>
                        <div className="profile-name">
                            <div>User 1</div>
                        </div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            About me
                        </div>
                        <div id="about-me">About User 1</div>
                    </div>
                    
                    <div className="profile-row">
                        <div className="row-header">
                            Location
                        </div>
                        <div id="location">User 1 Location</div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            Hobbies
                        </div>
                        <div className="row-content">
        
                            <div>Hobby 1</div>
                            <div>Hobby 2</div>
    
                        </div>
                    </div>
                    <div style={{ display: "flex", margin: "5%" }}>
                        <button className="bottom-button">Message</button>
                        <button className="bottom-button">Add friend</button>
                    </div>
                </div>

                {/* ////////////////////////// */}

                <div className="single-profile">
                    <div className="profile-header">
                        <div className="profile-picture-container">
                            <img src={profileImage} className="profile-picture" />
                        </div>
                        <div className="profile-name">
                            <div>User 2</div>
                        </div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            About me
                        </div>
                        <div id="about-me">About User 2</div>
                    </div>
                    
                    <div className="profile-row">
                        <div className="row-header">
                            Location
                        </div>
                        <div id="location">User 2 Location</div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            Hobbies
                        </div>
                        <div className="row-content">
        
                            <div>Hobby 1</div>
                            <div>Hobby 2</div>
                            <div>Hobby 3</div>
                            <div>Hobby 4</div>
    
                        </div>
                    </div>
                    <div style={{ display: "flex", margin: "5%" }}>
                        <button className="bottom-button">Message</button>
                        <button className="bottom-button">Add friend</button>
                    </div>
                </div>

                {/* ////////////////////////// */}

                <div className="single-profile">
                    <div className="profile-header">
                        <div className="profile-picture-container">
                            <img src={profileImage} className="profile-picture" />
                        </div>
                        <div className="profile-name">
                            <div>User 3</div>
                        </div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            About me
                        </div>
                        <div id="about-me">About User 3</div>
                    </div>
                    
                    <div className="profile-row">
                        <div className="row-header">
                            Location
                        </div>
                        <div id="location">User 3 Location</div>
                    </div>

                    <div className="profile-row">
                        <div className="row-header">
                            Hobbies
                        </div>
                        <div className="row-content">
        
                            <div>Hobby 1</div>
                            <div>Hobby 2</div>
                            <div>Hobby 3</div>
    
                        </div>
                    </div>
                    <div style={{ display: "flex", margin: "5%" }}>
                        <button className="bottom-button">Message</button>
                        <button className="bottom-button">Add friend</button>
                    </div>
                </div>

                {/* ////////////////////////// */}
            </div>






        

          

        

        
          
        </div>
    </>
  )
}

export default FindUsers;