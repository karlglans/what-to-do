import React from 'react';
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink style={{margin: 5}} to="/">All</NavLink>
      <NavLink style={{margin: 5}} to="/active">Active</NavLink>
      <NavLink style={{margin: 5}} to="/compleated">Compleated</NavLink>
    </nav>
  );
}

export default Navigation;
