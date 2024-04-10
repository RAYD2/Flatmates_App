import React, { useState, useEffect } from "react";

import "../ComponentStyles/Profile.css";
import edit from "../assets/edit.png";
import NavBar from "../Components/Navbar";
import supabase from "../apis/supabaseclient";
const Profile = () => {
  const loggedId = localStorage.getItem("loggedInUserId");
  console.log(loggedId);

  const [publicProfile, setPublic] = useState(false);
  const [bioEdit, setBioEdit] = useState(false);
  const [locationEdit, setLocationEdit] = useState(false);
  const [hobbiesEdit, setHobbiesEdit] = useState(false);
  const [contactEdit, setContactEdit] = useState(false);

  const [profileImage, setProfileImage] = useState(null);
  const [profileFile, setProfileFile] = useState(null);
  const [profileUrl, setProfileUrl] = useState("");
  const [filename, setFilename] = useState("");

  const [name, setName] = useState("");
  const [bio, setBio] = useState("Loading...");
  const [location, setLocation] = useState("Loading...");
  const [hobbies, setHobbies] = useState(["Loading..."]);
  const [contacts, setContacts] = useState(["Loading..."]);

  const [currentContent, setCurrentContent] = useState("");
  const [userInput, setUserInput] = useState(currentContent);
  const [hobbiesInput, setHobbiesInput] = useState(false);
  const [contactsInput, setContactsInput] = useState(false);

  // Create a profile entry for each existing user
  const createProfile = async () => {
    const { data: accountInfoData, error } = await supabase
      .from("accountinfo")
      .select("*");

    for (const accountInfoRow of accountInfoData) {
      const { id } = accountInfoRow; // Extract the ID from the accountinfo row

      try {
        // Check if a row already exists for this ID
        const { data: existingProfiles, error: profileError } = await supabase
          .from("profileDetails")
          .select("*")
          .eq("id", id);

        if (existingProfiles.length === 0) {
          // Insert a new row into the profileDetails table with the same ID
          const { data: insertedData, error: insertError } = await supabase
            .from("profileDetails")
            .insert([
              {
                // Populate with default values
                id,
                bio: "No bio recorded",
                location: "No location recorded",
                hobbies: ["No hobbies recorded"],
                contacts: ["No contacts recorded"],
              },
            ]);
        } else {
          console.log(`Profile already exists for account ID ${id}`);
        }
      } catch (error) {
        console.error("Error retrieving/inserting data:", error.message);
      }
    }
  };

  // Handle profileFile selection
  const selectProfileImage = async (event) => {
    const profileFile = event.target.files[0]; // Assign first profileFile from array to variable
    const reader = new FileReader(); // Object to read profileFile content

    reader.onload = function (e) {
      // Once profileFile is loaded...
      setProfileImage(e.target.result); // Set state variables to selected image
      setProfileFile(profileFile);
    };

    try {
      reader.readAsDataURL(profileFile); // Convert to readable format enable display
    } catch {}
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  // Fetch from database
  const fetchUserData = async () => {
    const accountInfo = await supabase
      .from("accountinfo")
      .select("firstname, surname, emailaddress")
      .eq("id", loggedId);

    const profileDetails = await supabase
      .from("profileDetails")
      .select("bio, location, hobbies, contacts, fileName")
      .eq("id", loggedId);

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

  // Update the database
  const updateDatabase = async () => {
    if (profileFile) {
      await supabase
        .from("profileDetails")
        .update({
          fileName: profileFile.name,
        })
        .eq("id", loggedId);
    }

    await supabase
      .from("profileDetails")
      .update({
        bio: bio,
        location: location,
        hobbies: hobbies,
        contacts: contacts,
      })
      .eq("id", loggedId);

    uploadImage();
  };

  const uploadImage = async () => {
    try {
      const { data, error } = await supabase.storage
        .from("profilePicture")
        .upload(profileFile.name, profileFile, {
          upsert: true,
        });
    } catch (error) {
      console.error("Error uploading profileFile:", error.message);
    }
  };

  useEffect(() => {
    createProfile().then(() => {
      // Ensures correct loading order,
      // sometimes fetches data before it exists
      fetchUserData();
      fetchImage();
    });
  }, []);

  useEffect(() => {
    console.log(filename);
    fetchImage();
  }, [filename]);

  useEffect(() => {
    setUserInput(currentContent); // Update userInput whenever currentContent changes
  }, [currentContent]); // Run every time current content changes

  const toggleBioEdit = () => {
    setCurrentContent(bio); // Sets text present in textbox
    setBioEdit(!bioEdit); // Toggle to opposite
    setBio(userInput); // Set content to user's input
  };

  const toggleLocationEdit = () => {
    setCurrentContent(location); // Same as bio
    setLocationEdit(!locationEdit);
    setLocation(userInput);
  };

  // Editing list of hobbies
  const toggleHobbiesEdit = () => {
    setHobbiesEdit(!hobbiesEdit); // Toggle determine conditional rendering
    addHobby();
    setHobbiesInput(false);
  };

  const addHobby = () => {
    setHobbiesInput(true); // To determine conditional rendering of content
    if (userInput.trim() !== "") {
      // Check if input is not empty
      setHobbies([...hobbies, userInput]); // Append user's input to hobbies array
      setUserInput(""); // Clear input
    }
  };

  const removeHobby = () => {
    const newArray = [...hobbies]; // Create copy
    newArray.pop(); // Remove last item in array
    setHobbies(newArray); // Update state variable
  };

  // Editing list of contacts, identical logic to hobbies
  const toggleContactEdit = () => {
    setContactEdit(!contactEdit);
    addContact();
    setContactsInput(false);
  };

  const addContact = () => {
    setContactsInput(true); // To determine conditional rendering of content
    if (userInput.trim() !== "") {
      // Check if input is not empty
      setContacts([...contacts, userInput]); // Append user's input to contacts array
      setUserInput(""); // Clear input
    }
  };

  const removeContact = () => {
    const newArray = [...contacts]; // Create copy
    newArray.pop(); // Remove last item in array
    setContacts(newArray); // Update state variable
  };

  return (
    <>
      <NavBar />
      <div className="background-container">
        <div className="background top" />
        <div className="background bottom" />
      </div>

      <div className="content-container">
        <div className="profile-header">
          <div
            className={
              "publicProfile"
                ? "profile-picture-container"
                : "profile-picture-editable"
            }
          >
            {profileUrl === null ? (
              publicProfile ? (
                <div />
              ) : (
                <input
                  type="file"
                  className="profile-picture-input"
                  onChange={selectProfileImage}
                />
              )
            ) : publicProfile ? (
              <img src={profileImage} className="profile-picture" />
            ) : (
              <div className="picture-selected">
                <img src={profileImage} className="profile-picture" />
                <input
                  type="file"
                  className="profile-picture-input"
                  onChange={selectProfileImage}
                />
              </div>
            )}
          </div>

          <div className="profile-name">
            <div>{name}</div>
            <button
              onClick={() => setPublic(!publicProfile)}
              className="handle"
            >
              Toggle public view
            </button>
          </div>
        </div>

        <div className="profile-row">
          <div className="row-header">
            About me
            {!publicProfile && (
              <button className="edit-button" onClick={toggleBioEdit}>
                <img src={edit} className="edit-icon" />
              </button>
            )}
          </div>

          {bioEdit === false ? (
            <div id="about-me">{bio}</div>
          ) : (
            <input
              className="edit-mode"
              type="text"
              id="about"
              value={userInput}
              onChange={handleUserInput}
            />
          )}
        </div>

        <div className="profile-row">
          <div className="row-header">
            Location
            {!publicProfile && (
              <button className="edit-button" onClick={toggleLocationEdit}>
                <img src={edit} className="edit-icon" />
              </button>
            )}
          </div>

          {locationEdit === false ? (
            <div className="location">{location}</div>
          ) : (
            <input
              className="edit-mode"
              type="text"
              value={userInput}
              onChange={handleUserInput}
            />
          )}
        </div>

        <div className="profile-row">
          <div className="row-header">
            Hobbies
            {!publicProfile && (
              <button className="edit-button" onClick={toggleHobbiesEdit}>
                <img src={edit} className="edit-icon" />
              </button>
            )}
            {hobbiesEdit && (
              <div style={{ display: "flex" }}>
                <button onClick={addHobby} className="plus-minus">
                  +
                </button>
                <button onClick={removeHobby} className="plus-minus">
                  -
                </button>
              </div>
            )}
          </div>

          <div className="row-content">
            {hobbies.map((hobby, index) => (
              <div key={index}>{hobby}</div>
            ))}

            {hobbiesInput && (
              <input
                className="edit-mode"
                type="text"
                value={userInput}
                onChange={handleUserInput}
              />
            )}
          </div>
        </div>

        <div className="profile-row">
          <div className="row-header">
            Contact
            {!publicProfile && (
              <button className="edit-button" onClick={toggleContactEdit}>
                <img src={edit} className="edit-icon" />
              </button>
            )}
            {contactEdit && (
              <div style={{ display: "flex" }}>
                <button onClick={addContact} className="plus-minus">
                  +
                </button>
                <button onClick={removeContact} className="plus-minus">
                  -
                </button>
              </div>
            )}
          </div>

          <div className="row-content">
            {contacts.map((contact, index) => (
              <div key={index}>{contact}</div>
            ))}

            {contactsInput && (
              <input
                className="edit-mode"
                type="text"
                value={userInput}
                onChange={handleUserInput}
              />
            )}
          </div>
        </div>

        {publicProfile ? (
          <button className="message-button">Message</button>
        ) : (
          <div style={{ display: "flex", margin: "5%" }}>
            <button onClick={updateDatabase} className="message-button">
              Save
            </button>
            <button
              onClick={() => window.location.reload()}
              className="message-button"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
