
import React  from 'react';
import FindProperty from "../Components/findProperty"
import SearchBar from "../Components/SearchBar"
import NavBar from '../Components/Navbar';

function FilteringPage(){
    return(
        <>
            <SearchBar />
            <FindProperty />
            <NavBar />
        </>

    )
}

export default FilteringPage