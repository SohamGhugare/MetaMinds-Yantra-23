import "./Hall.css";
import Navbar from "../components/navbar/Navbar";
import React from "react";
import Cards from "../components/cards/CardVenue";
import "../components/cards/ItWorks.css";
import { useEffect, useState } from "react";

const Hall = () => {
  const venuesData = [
    {
      ID: 1,
      CreatedAt: "2023-06-08T02:37:29.623052+05:30",
      UpdatedAt: "2023-06-08T02:37:29.623052+05:30",
      DeletedAt: null,
      Name: "Lawn",
      Description: "50x50 metres lawn",
      Price: 3500,
      Images: null,
      Location: "Balewadi High Street, Pune",
      Timings: {
        ID: 0,
        VenueID: 0,
        Start: "0001-01-01T00:00:00Z",
        End: "0001-01-01T00:00:00Z",
      },
      EnlisterID: 1,
    },
    {
      ID: 2,
      CreatedAt: "2023-06-08T02:37:29.623052+05:30",
      UpdatedAt: "2023-06-08T02:37:29.623052+05:30",
      DeletedAt: null,
      Name: "Auditorium",
      Description: "50x50 metres lawn",
      Price: 4500,
      Images: null,
      Location: "Balewadi High Street, Pune",
      Timings: {
        ID: 0,
        VenueID: 0,
        Start: "0001-01-01T00:00:00Z",
        End: "0001-01-01T00:00:00Z",
      },
      EnlisterID: 1,
    },
  ];

  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/v1/venues/all")
      .then((response) => response.json())
      .then((data) => {
        setVenues(data);
        console.log(data);
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
          {venuesData?.map((venue) => (
            <div key={venue.id}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hall;
