
import ReactDOM from 'react-dom/client';
import '../index.css';


import React  from 'react';

import '../componentStyles/SavedProperties.css'


function SavedProperties(){
    return(
        <>
            <div className="SavedPropertiesContainer">
                <div className="SavedPropertiesTitle">
                    Saved Properties
                </div>

                <div className="SavedPropertiesList"></div>
            </div>
        </>
    )
}

export default SavedProperties