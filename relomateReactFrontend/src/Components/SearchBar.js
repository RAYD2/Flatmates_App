import React  from 'react';

import "../ComponentStyles/SearchBar.css"

function SearchBar(){
    return(
        <>
            <div className="searchBar">
                <input id = "searchListing" placeholder="Search e.g. NE16"></input>
            </div>
        </>
    )
}

export default SearchBar