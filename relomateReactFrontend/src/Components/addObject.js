// AddPropertyInput.js
import React, { useState } from "react";
import axios from "axios";

export default function AddPropertyInput({ property, setAddProperty }) {
  const [userNote, setUserNote] = useState("");

  const handleImageClick = async () => {
    try {
      await axios.post("http://localhost:8000/add-saved-listing/", {
        mainImage: property.imageUris[0],
        personalNote: userNote,
      });
      console.log("New object created successfully!");
    } catch (error) {
      console.error("Error creating new object:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleImageClick(); // Call function to handle image click
  };

  return (
    <div>
      <img src={property.imageUris[0]} alt="Property Image" />
      <form autocomplete="off">
        <input
          id="textSave"
          type="text"
          placeholder="Enter a note..."
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault(); // Prevent default form submission
            setAddProperty(false);
            handleSubmit(e); // Pass the event object to handleSubmit
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
