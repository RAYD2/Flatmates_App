import logo from "./logo.svg";
import "./index.css";
import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Properties from "./Components/allProperties";
import Homepage from "./Pages/homepage";
import Profile from "./Components/Profile";

import NavBar from "./Components/Navbar";

import Filters from "./Pages/filter";
import Results from "./Pages/results";

import ME from "./Pages/MatchingEmployeePage";

function App() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:wght@300&display=swap"
        rel="stylesheet"
      ></link>

      
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/properties" element={<Properties />} />

          <Route exact path="/Profile" element={<Profile />} />

          <Route exact path="/filter" element={<Filters />} />
          <Route exact path="/properties" element={<Results />} />
          <Route exact path="/MatchingEmployee" element={<ME />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
