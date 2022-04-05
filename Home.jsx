import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link, NavLink } from "react-router-dom";
  
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          {/* Endpoint to route to Home component */}
          <NavLink to="./home">Home</NavLink>
        </li>
        <li>
          {/* Endpoint to route to About component */}
          <NavLink to="./about">About</NavLink>
        </li>
       
      </ul>
    </div>
  );
};
export default Home;