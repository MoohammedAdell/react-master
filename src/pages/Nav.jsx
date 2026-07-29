import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
  const active = ({ isActive }) => ({
    color: isActive ? "red" : "gray",
      marginRight: "10px",
  });
  return (
    <div>
      <NavLink style={active} to="/">
        Home Page
      </NavLink>
      <NavLink style={active} to="/about">
        About Page
      </NavLink>
      <NavLink style={active} to="/contact">
        Contact Page
      </NavLink>
    </div>
  );
}
