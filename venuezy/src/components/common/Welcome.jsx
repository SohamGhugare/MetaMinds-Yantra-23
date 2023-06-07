import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FaHeart } from "react-icons/fa";
import dot1 from "../../assets/dot_1.png";
import dot2 from "../../assets/dot_2.png";

const Welcome = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-900 via-green-600 to-green-300">
      <div className=" flex flex-row justify-evenly items-center h-screen">
        <div className="font-sans flex flex-col items-start justify-start">
          <text className="text-6xl font-bold text-white mb-20">
            Hello, User
          </text>
          <text className="text-9xl font-bold text-white">Venuezy</text>
          <text className="text-5xl font-bold text-white">Welcomes You</text>
          <List className="flex flex-col">
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-green-500 text-sm" />
              <span className="text-white">Venue Enlisting</span>
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-green-500 text-sm" />
              <span className="text-white">Venue Booking</span>
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-green-500 text-sm" />
              <span className="text-white">Volunteer for a Social Cause</span>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
