import React, {useRef, useState} from 'react';

import NavBar from './Navbar';

import './Profile.css'
import { Router } from 'react-router-dom';


// Define your component
const Profile = () => {

    const [profileImage, setProfileImage] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
        setProfileImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    //TODO: Save selected image somewhere
    // button to EDIT

  return (
    <>
        
        <div className='background-container'>
            <div className='background top'/>
            <div className='background bottom'/>
        </div>

        <div className="content-container">

            <div className='profile-header'>

                <div className="profile-picture-container">
                    {profileImage === null ? (
                        <input type="file" className="profile-picture-input" onChange={handleFileChange}/>
                    ) : (
                        <div className='picture-selected'>
                            <img src={profileImage} className='profile-picture' />
                            <input type="file" className="profile-picture-input" onChange={handleFileChange}/>
                        </div>
                    )}
                </div>
                
                <div className='profile-name'>Name Name</div>
            </div>

            <div className='profile-row'>
                <div className='row-header'>About me</div>
                <div className='row-content'>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
                
            <div className='profile-row'>
                <div className='row-header'>Location</div>
                <div id='location'>London, UK</div>
            </div>

            <div className='profile-row'>
                <div className='row-header'>Hobbies</div>
                <div className='row-content'>
                    <div>test1</div>
                    <div>test2</div>
                    <div>test3</div>
                    <div>test4</div>
                </div>
            </div>

            <div className='profile-row'>
                <div className='row-header'>Contact</div>
                <div className='row-content'>
                    <div>test1</div>
                    <div>test2</div>
                    <div>test3</div>
                </div>
            </div>

            <button className='message-button'>Message</button>

        </div>
    </>
  );
};

export default Profile;