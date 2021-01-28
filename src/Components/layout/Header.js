import React from "react";
import { Navbar, Nav, Button, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../logowhite.png";
import navSvg from "../../wave.svg";
import "../../Header.css";
import RgbSlider from "../RgbSlider";

export default function Header() {
  return (
    <div className="navBar">
      <div className="nav-upper">
        <div className="nav-logo">
          <Link exact to="/">
            <img src={logo} width="180px" height="180px" alt="logo"></img>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/docs" className="nav-title">
            Docs
          </Link>

          <Link to="/about" className="nav-title">
            About
          </Link>
        </div>
      </div>
      <div className="nav-svg">
        <img src={navSvg} />
      </div>
    </div>
  );
}
