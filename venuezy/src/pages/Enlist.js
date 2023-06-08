import "./Hall.css";
import Navbar from "../components/navbar/Navbar";
import React from "react";
import "../components/cards/ItWorks.css";
import { useEffect, useState } from "react";

const Enlist = () => {
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [venueCity, setVenueCity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      venueName,
      venueAddress,
      venueCity,
      description,
    });

    setVenueName("");
    setVenueAddress("");
    setVenueCity("");
    setDescription("");
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit} style={{ border: "1px solid black" }}>
        <label style={{ border: "1px solid black" }}>
          Venue Name:
          <input
            type="text"
            value={venueName}
            onChange={(e) => setVenueName(e.target.value)}
            required
          />
        </label>
        <br />

        <label style={{ border: "1px solid black" }}>
          Venue Address:
          <input
            type="text"
            value={venueAddress}
            onChange={(e) => setVenueAddress(e.target.value)}
            required
          />
        </label>
        <br />

        <label style={{ border: "1px solid black" }}>
          Venue City:
          <input
            type="text"
            value={venueCity}
            onChange={(e) => setVenueCity(e.target.value)}
            required
          />
        </label>
        <br />

        <label style={{ border: "1px solid black" }}>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit" style={{ border: "1px solid black" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Enlist;
