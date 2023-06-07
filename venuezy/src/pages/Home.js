import { Link } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import VenueBox from "../components/venueBox/VenueBox";
import "./Home.css";
import React from "react";
import ItWorks from "../components/cards/ItWorks";

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
      <ItWorks />
    </div>
  );
};

export default Home;
