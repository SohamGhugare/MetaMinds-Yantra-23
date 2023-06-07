import React from "react";
import Login from "../components/Auth/User/Login";
import Roles from "../components/Auth/Roles";
import Welcome from "../components/common/Welcome";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FaHeart } from "react-icons/fa";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="bg">
      <div className="leftText">
        <h1 className="text-7xl text-white venuezy">Venuezy</h1>
        <br></br>
        <h2 className="text-5xl font-bold text-white">Welcomes You</h2>
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
      <Roles />
    </div>
  );
};

export default HomePage;
