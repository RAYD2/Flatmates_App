import React, {useRef, useState} from 'react';

import './Profile.css';
import edit from '../assets/edit.png';

const Profile = () => {

    const [profileImage, setProfileImage] = useState(null);

    const [bioEdit, setBioEdit] = useState(null);
    const [locationEdit, setLocationEdit] = useState(null);
    const [hobbiesEdit, setHobbiesEdit] = useState(null);
    const [contactEdit, setContactEdit] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function(e) {
        setProfileImage(e.target.result);
        };

        reader.readAsDataURL(file);
    };

    // Not finished WIP
    const toggleBioEdit = () => {
        setBioEdit(!bioEdit)
    }

    const toggleLocationEdit = () => {
        setLocationEdit(!locationEdit)
    }
  
    const toggleHobbiesEdit = () => {
        setHobbiesEdit(!hobbiesEdit)
    }


    const toggleContactEdit = () => {
        setContactEdit(!contactEdit)
    }

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
                <div className='row-header'>
                    About me
                    <button onClick={toggleBioEdit}><img src={edit} className='edit-button'></img></button>
                </div>
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
                <div className='row-header'>
                    Location
                    <button><img src={edit} className='edit-button'></img></button>
                </div>
                <div id='location'>London, UK</div>
            </div>

            <div className='profile-row'>
                <div className='row-header'>
                    Hobbies
                    <button><img src={edit} className='edit-button'></img></button>
                </div>
                <div className='row-content'>
                    <div>test1</div>
                    <div>test2</div>
                    <div>test3</div>
                    <div>test4</div>
                </div>
            </div>

            <div className='profile-row'>
                <div className='row-header'>
                    Contact
                    <button><img src={edit} className='edit-button'></img></button>
                </div>
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
