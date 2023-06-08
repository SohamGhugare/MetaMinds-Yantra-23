import "./Enlist.css";
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

  const [venueImage, setVenueImage] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [timings, setTimings] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setVenueImage(file);
  };

  const handleSubmit1 = (e) => {
    e.preventDefault();

    // Perform any necessary actions with the form data
    console.log({
      venueImage,
      venueAddress,
      phoneNumber,
      timings,
    });

    // Clear the form inputs
    setVenueImage(null);
    setVenueAddress("");
    setPhoneNumber("");
    setTimings("");
  };

  return (
    <div>
      <Navbar />
      <div className="formOuter">
        <form onSubmit={handleSubmit}>
          <label>
            Venue Name:
            <input
              type="text"
              value={venueName}
              onChange={(e) => setVenueName(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <label>
            Venue Address:
            <input
              type="text"
              value={venueAddress}
              onChange={(e) => setVenueAddress(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <label>
            Venue City:
            <input
              type="text"
              value={venueCity}
              onChange={(e) => setVenueCity(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <button type="submit" style={{ border: "1px solid black" }}>
            Submit
          </button>
        </form>
      </div>

      <div className="formOuter">
        <form onSubmit={handleSubmit1}>
          <label>
            Venue Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
          </label>
          <br />

          <label>
            Phone Number:
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </label>
          <br />

          <label>
            Timings:
            <input
              type="text"
              value={timings}
              onChange={(e) => setTimings(e.target.value)}
              required
            />
          </label>
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Enlist;
