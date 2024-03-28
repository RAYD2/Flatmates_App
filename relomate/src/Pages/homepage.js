
import React  from 'react';
import NavBar from "../Components/Navbar";
import SavedSearches from "../Components/SavedSearches";
import SavedProperties from "../Components/SavedProperties";
import '../componentStyles/HomePage.css'
import SearchBar from "../Components/SearchBar";
function Homepage(){
    return(
        <>
            <SearchBar />
            <SavedProperties />
            <SavedSearches />
            <NavBar/>
        </>
    )
}

export default Homepage