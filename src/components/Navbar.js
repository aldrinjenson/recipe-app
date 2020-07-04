import React, { useEffect } from "react";
// import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

// import { HashLink as HLink } from "react-router-hash-link";

const Navbar = () => {
  useEffect(() => {
    const sidenav = document.querySelector("#mobile-nav");
    M.Sidenav.init(sidenav, {});
  }, []);

  // const links = [
  //   { id: 1, Name: "Home", to: "/#home" },
  //   { id: 2, Name: "About", to: "/#about" },
  //   { id: 3, Name: "Achievements", to: "/#achievements" },
  //   { id: 4, Name: "Gallery", to: "/#gallery" },
  //   { id: 5, Name: "Contact", to: "/#contact" },
  //   { id: 6, Name: "Team", to: "/team" },
  // ];

  return (
    <div className="navbar">
      <div className="navbar-fixed">
        <nav
          className="nav-wrapper accent-1"
          style={{ "background-color": "white" }}
        >
          <div className="container">
            <a href="#" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons" style={{ color: "#C33427" }}>
                menu
              </i>
            </a>
            <div
              className="hide-on-large-only black-text center-align"
              style={{ fontSize: 18 }}
            >
              <span className="red-text">IEDC</span>MEC
            </div>
            <ul className="right hide-on-med-and-down">
              {/* {links.map((link) => (
                <li key={link.id}>
                  <HLink className="black-text" to={link.to}>
                    {link.Name}
                  </HLink>
                </li>
              ))} */}
              {/* <li> <HLink>Search</HLink> </li> */}
            </ul>
          </div>
        </nav>
      </div>

      <ul className="sidenav" id="mobile-nav">
        {/* {links.map((link) => (
          <li key={link.id}>
            <HLink className="black-text" to={link.to}>
              {link.Name}
            </HLink>
          </li> */}
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
