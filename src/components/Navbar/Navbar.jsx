import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return <nav className='navbar'>
      <ul className='navbar-ul'>
      <NavLink to="/characters" className={({ isActive }) => (isActive ? "active" : "inactive")}>
      Characters
      </NavLink>
      <NavLink to="/houses" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Houses
      </NavLink>
      <NavLink to="/chronology" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Chronology
      </NavLink>
      </ul>
  </nav>;
};

export default Navbar;


