import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle("collapsible--expanded");
  };
  return (
    <header>
      <nav ref={navRef} className="nav collapsible">
        <Link to="home" className="nav__brand">
          Start React
        </Link>
        <div className="collapsible__icon nav__toggler" onClick={showNavBar}>
          <span className="collapsible__tagline">Menu</span>
          <span className="icon-container">
            <i className="fa-solid fa-bars icon"></i>
          </span>
        </div>
        <ul className="nav__list collapsible__content">
          <li className="nav__item">
            <Link to="portfolio">Portfolio</Link>
          </li>
          <li className="nav__item">
            <Link to="about">About</Link>
          </li>
          <li className="nav__item">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
