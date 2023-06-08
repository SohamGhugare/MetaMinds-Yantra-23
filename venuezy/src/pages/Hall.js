import "./Hall.css";
import Navbar from "../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Cards from "../components/cards/CardVenue";
import "../components/cards/ItWorks.css";

const Hall = () => {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/v1/venues/all")
      .then((response) => response.json())
      .then((data) => {
        setVenues(data.venues);
        console.log(data.venues);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="howWorks">
        <div className="title1">
          <h1 className="titleHead">Halls</h1>
          <p className="titleText">
            Don't Worry, We'll keep it very simple. Get started
          </p>
        </div>
        <div className="cards">
          {venues.length === 0 ? (
            <p>No venues available</p>
          ) : (
            venues.map((venue) => (
              <div key={venue.ID}>
                <div data-aos="flip-up" data-aos-delay="300">
                  <Cards
                    name={venue.Name}
                    img=""
                    address={venue.Location}
                    description={venue.Description}
                    price={venue.Price}
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Hall;
