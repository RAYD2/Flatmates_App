import React, {useRef, useState, useEffect} from 'react';

import '../ComponentStyles/Profile.css';
import edit from '../assets/edit.png';

const Profile = () => {

    // TODO: save state variables to database, to be saved across sessions

    const [profileImage, setProfileImage] = useState(null);

    const selectProfileImage = (event) => {
        const file = event.target.files[0]; // Assign first file from array to variable
        const reader = new FileReader(); // Object to read file content

        reader.onload = function(e) { // Once file loaded...
            setProfileImage(e.target.result); // Set state variable to selected image
        };

        reader.readAsDataURL(file); // Convert to readable format enable display
    };

    // Edit mode of each section
    const [bioEdit, setBioEdit] = useState(false);
    const [locationEdit, setLocationEdit] = useState(false);
    const [hobbiesEdit, setHobbiesEdit] = useState(false);
    const [contactEdit, setContactEdit] = useState(false);

    // Contents of each section
    const [bio, setBio] = useState('Edit me');
    const [location, setLocation] = useState('Location');
    const [hobbies, setHobbies] = useState(['1','2','3','4']);
    const [contacts, setContacts] = useState(['1','2','3']);

    const [currentContent, setCurrentContent] = useState(''); // Used to enable editing existing content instead of erasing each time
    
    // Used to temporariliy save all user input into state variable
    const [userInput, setUserInput] = useState(currentContent); // Sets displayed text alrady present in input text box 

    // Used to determine if text box for hobby and contact should be displayed to enable input
    const [HobbiesInput, setHobbiesInput] = useState(false);
    const [ContactsInput, setContactsInput] = useState(false);

    // Sets state variable to hold user input
    const handleUserInput = (event) => {
        setUserInput(event.target.value);
      };

    useEffect(() => {
        setUserInput(currentContent); // Update userInput whenever currentContent changes
    }, [currentContent]); // Watches for change in currentContent

    const toggleBioEdit = () => {
        setCurrentContent(bio); // Sets text present in textbox
        setBioEdit(!bioEdit); // Toggle to opposite
        setBio(userInput); // Set content to user's input
    }

    const toggleLocationEdit = () => {
        setCurrentContent(location); // Same as bio
        setLocationEdit(!locationEdit)
        setLocation(userInput)
    }

    // Editing list of hobbies
    const toggleHobbiesEdit = () => {
        setHobbiesEdit(!hobbiesEdit) // Toggle determine conditional rendering
        addHobby()
        setHobbiesInput(false)
    }

    const addHobby = () => {
        setHobbiesInput(true) // To determine conditional rendering of content
        if (userInput.trim() !== '') { // Check if input is not empty
            setHobbies([...hobbies, userInput]); // Append user's input to hobbies array
            setUserInput(''); // Clear input
        }
    };

    const removeHobby = () => {
        const newArray = [...hobbies]; // Create copy
        newArray.pop(); // Remove last item in array
        setHobbies(newArray); // Update state variable
    }

    // Editing list of contacts, very similar to editing hobbies, identical logic
    const toggleContactEdit = () => {
        setContactEdit(!contactEdit)
        addContact()
        setContactsInput(false)
    }

    const addContact = () => {
        setContactsInput(true) // To determine conditional rendering of content
        if (userInput.trim() !== '') { // Check if input is not empty
            setContacts([...contacts, userInput]); // Append user's input to contacts array
            setUserInput(''); // Clear input
        }
    }

    const removeContact = () => {
        const newArray = [...contacts]; // Create copy
        newArray.pop(); // Remove last item in array
        setContacts(newArray); // Update state variable
    }


  return (
    <>
        
        <div className='background-container'>
            <div className='background top'/>
            <div className='background bottom'/>
        </div>

        {/* White box in centre of screen */}
        <div className="content-container"> 

            {/* Section at the top containing profile picture border and name */}
            <div className='profile-header'>

                <div className="profile-picture-container">
                    {/* If no image selected, display button for file selection
                    Else display image and overlay button */}
                    {profileImage === null ? (
                        <input type="file" className="profile-picture-input" onChange={selectProfileImage}/>
                    ) : (
                        <div className='picture-selected'>
                            <img src={profileImage} className='profile-picture' />
                            <input type="file" className="profile-picture-input" onChange={selectProfileImage}/>
                        </div>
                    )}
                </div>
                
                <div className='profile-name'>Name Name</div>
            </div>

            {/* New section below header */}
            <div className='profile-row'>
                {/* Above line */}
                <div className='row-header'>
                    About me
                    <button className='edit-button' onClick={toggleBioEdit}>
                        <img src={edit} className='edit-icon'/>
                    </button>
                </div>

                {/* Below line */}
                {/* If edit mode for section false, display content
                else display text box for input */}
                {bioEdit === false ? (
                    <div id='about-me'>
                        {bio}
                    </div>
                ) : (
                    <input
                        className='edit-mode'
                        type='text'
                        value={userInput}
                        onChange={handleUserInput}/>
                )}

            </div>

            {/* New section */}
            {/* Similar to bio */}
            <div className='profile-row'>
                <div className='row-header'>
                    Location
                    <button className='edit-button' onClick={toggleLocationEdit}><img src={edit} className='edit-icon'></img></button>
                </div>

                {locationEdit === false ? (
                    <div id='location'>
                        {location}
                    </div>
                ) : (
                    <input
                        className='edit-mode'
                        type='text'
                        value={userInput}
                        onChange={handleUserInput}/>
                )}
            </div>

            
            <div className='profile-row'>
                <div className='row-header'>
                    Hobbies
                    <button className='edit-button' onClick={toggleHobbiesEdit}><img src={edit} className='edit-icon'></img></button>
                    {/* Display buttons to append or remove hobbies determined by edit mode state variable*/}
                    {hobbiesEdit && (
                        <div style={{display: 'flex'}}>
                            <button onClick={addHobby} className='plus-minus'>+</button>
                            <button onClick={removeHobby} className='plus-minus'>-</button>
                        </div>
                    )}
                </div>
                
                {/* Iterate through array and display */}
                <div className='row-content'>
                    {hobbies.map((hobby, index) => (
                        <div key={index}>{hobby}</div>
                    ))}

                    {/* Display input box if section edit mode enabled */}
                    {HobbiesInput &&
                        <input
                        className='edit-mode'
                            type='text'
                            value={userInput}
                            onChange={handleUserInput}/>
                    }
                </div>
            
            </div>

            {/* Section for contacts, identical logic to hobbies section */}
            <div className='profile-row'>
                <div className='row-header'>
                    Contact
                    <button className='edit-button' onClick={toggleContactEdit}><img src={edit} className='edit-icon'></img></button>
                    {contactEdit && (
                        <div style={{display: 'flex'}}>
                            <button onClick={addContact} className='plus-minus'>+</button>
                            <button onClick={removeContact} className='plus-minus'>-</button>
                        </div>
                    )}
                </div>

                <div className='row-content'>
                    {contacts.map((contact, index) => (
                        <div key={index}>{contact}</div>
                    ))}

                    {/* Display input box if section edit mode enabled */}
                    {ContactsInput &&
                        <input
                        className='edit-mode'
                            type='text'
                            value={userInput}
                            onChange={handleUserInput}/>
                    }
                </div>
            </div>

            <button className='message-button'>Message</button>

        </div>
    </>
  );
};

export default Profile;
