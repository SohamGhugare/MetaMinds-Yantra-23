import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FaHeart } from "react-icons/fa";
import dot1 from "../../assets/dot_1.png";
import dot2 from "../../assets/dot_2.png";

const Welcome = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300">
      {/* <img src={dot1} className="relative w-108.25 h-93 top-3 right-3" alt="logo" /> */}

      <div className=" flex flex-row justify-evenly items-center h-screen">
        <div className="font-sans flex flex-col items-start justify-start">
          <text className="text-6xl font-bold text-white mb-20">
            Hello, User
          </text>
          <text className="text-9xl font-bold text-white">IHP</text>
          <text className="text-5xl font-bold text-white">Welcomes You</text>
          <List className="flex flex-col">
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-blue-500 text-sm" />
              <span className="text-white">Medical records</span>
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-blue-500 text-sm" />
              <span className="text-white">Access</span>
            </ListItem>
            <ListItem className="flex items-center space-x-2">
              <FaHeart className="text-blue-500 text-sm" />
              <span className="text-white">Management</span>
            </ListItem>
          </List>
        </div>
      </div>
      {/* <img src={dot2} className="relative w-108.25 h-93 left-3 bottom-3" alt="logo" /> */}
    </div>
  );
};

export default Welcome;
