import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";

const Volunteer = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [enlisterEmail, setEnlisterEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      description,
      price: parseInt(price, 10), // Parse the price value with base 10
      location,
      enlisterEmail,
    };

    // Send the form data to the API endpoint
    fetch("http://localhost:8081/api/v1/venues/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          // Form submission was successful
          // Handle the response accordingly
        } else {
          // Form submission failed
          // Handle the error response accordingly
        }
      })
      .catch((error) => {
        // Handle any network or server errors
      });

    // Clear the form inputs
    setName("");
    setDescription("");
    setPrice("");
    setLocation("");
    setEnlisterEmail("");
  };

  return (
    <div>
      <Navbar />
      <div className="formOuter">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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

          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              style={{ border: "1px solid black" }}
            />
          </label>
          <br />

          <label>
            Enlister Email:
            <input
              type="email"
              value={enlisterEmail}
              onChange={(e) => setEnlisterEmail(e.target.value)}
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
    </div>
  );
};

export default Volunteer;
