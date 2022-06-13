import React from "react";

// Stateless Functional Components

// Destructuring Arguments
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      {/* eslint-disable-next-line */}
      <a href="#" className="navbar-brand">
        Shop{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
