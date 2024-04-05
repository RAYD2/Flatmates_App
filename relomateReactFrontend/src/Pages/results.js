import NavBar from "../Components/Navbar";

import PropertyListings from "../apis/apiProperty";

export default function Results() {
  return (
    <>
      <NavBar />
      <PropertyListings />
    </>
  );
}
