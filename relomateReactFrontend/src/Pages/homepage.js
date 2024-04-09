import SavedProperties from "../Components/SavedProperties";
import SavedSearches from "../Components/SavedSearches";
import NavBar from "../Components/Navbar";
import "../index.css";
import Welcome from "../Components/Welcome.js"
export default function Homepage() {
  return (
    <>
      <div id = "box-green"></div>
      <div id = "box-black"></div>
      <NavBar />
      <Welcome/>
      <h1 id  = "desc"> ReloMate an international contultant relocation app by FDM</h1>
      <h2 id = "saved_title"> Saved Properties</h2>
      <SavedProperties />
      <SavedSearches />
      
    </>
  );
}
