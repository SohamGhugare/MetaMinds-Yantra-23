import Navbar from "../components/navbar/Navbar";
import VenueBox from "../components/venueBox/VenueBox";
import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="heroImg"></div>
      </div>
      <div className="venues">
        <VenueBox name="Hall" />
        <VenueBox name="Lawns" />
        <VenueBox name="Garages" />
        <VenueBox name="Labs" />
        <VenueBox name="Auditorium" />
      </div>
    </div>
  );
};

export default Home;
