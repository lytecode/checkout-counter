import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <a className="navbar-brand" style={whiteText} href="#">
        Items
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

const whiteText = {
  color: "#fff"
};

export default NavBar;
