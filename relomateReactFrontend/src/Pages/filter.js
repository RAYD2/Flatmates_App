import NavBar from "../Components/Navbar";
import Properties from "../Components/allProperties";
import "../index.css";
import PropertyResult from "../apis/propertyfind";
export default function Filters() {
  return (
    <>
      <NavBar />
      <PropertyResult />
      <Properties />
    </>
  );
}
