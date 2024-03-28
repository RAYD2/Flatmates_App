
import React  from 'react';

import '../index.css';

import '../componentStyles/SavedSearches.css'


function SavedSearches(){
    
    return(
        <>
        <div className='savedSearchesSection'></div>
            <div className='savedSearchesTitle'>Saved Searches</div>
            <div className="savedSearches">
                <h1>Oldham</h1>
                <p>Up to 1200pcm | Within 3 miles | Garden | </p>
            </div>
        </>
    )
}

export default SavedSearches