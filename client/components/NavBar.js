import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar () {
  return (
    <div className="navbar">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <NavLink to="/"> Home </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/countries"> Countries </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/aircrafts"> Aircraft </NavLink>
        </li>
      </ul>
    </div>
  );
}
