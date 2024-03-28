
import React  from 'react';

import "../componentStyles/Navbar.css"

function NavBar() {
    return (
        <div className="navBar">
            <ul>
                <li>
                    <div className='sideItem'>
                        <img src={require("../assets/homeIcon.png")} alt="homeIcon" />
                        <h3>Home</h3>
                    </div>
                </li>


                <li>
                <div className='sideItem'>
                        <img src={require("../assets/Union.png")} alt="MessageIcon" />
                        <h3>Connect</h3>
                    </div>
                </li>

                <li>
                    <div  div className='sideItem'>
                        <img src={require("../assets/Avatar.png")} alt="ProfileIcon" />
                        <h3>Profile</h3>
                    </div>
                </li>
                
            
            </ul>
            
            
        </div>
    );
}

export default NavBar;
