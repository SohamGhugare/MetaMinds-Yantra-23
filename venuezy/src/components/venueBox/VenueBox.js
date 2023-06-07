import "./VenueBox.css";
import React from "react";

const VenueBox = (props) => {
  return (
    <div>
      <div className="box">
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default VenueBox;
