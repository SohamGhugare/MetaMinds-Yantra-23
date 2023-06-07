import { Link } from "react-router-dom";
import Venues from "../components/cards/Venues";
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
        <Link to="/halls">
          <VenueBox name="Hall" />
        </Link>
        <VenueBox name="Lawns" />
        <VenueBox name="Garages" />
        <VenueBox name="Labs" />
        <VenueBox name="Auditorium" />
      </div>
      <Venues />
    </div>
  );
};

export default Home;
