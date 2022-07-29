import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const linkStyle = {
    display:"inline",
    padding:"25px"
  }
  
  
  return (
    <div className="navbar">
      <NavLink to="/"
      exact style={linkStyle} >
        Home
      </NavLink>
      <NavLink to="/movies"
      exact style={linkStyle} >
        Movies
      </NavLink>
      <NavLink to="/directors"
      exact style={linkStyle} >
        Directors
      </NavLink>
      <NavLink to="/actors"
      exact style={linkStyle} >
        Actors
      </NavLink>
    </div>
    )
    
}

export default NavBar;
