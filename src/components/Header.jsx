import React from "react";
import "../assets/css/header.css";
export default function Header() {
  return (
    <>
      <header className="topnav" id="myTopnav">
        <a href="#home">
          <img className="logo" src="logo 1.png" alt="Smiley face" />
        </a>
        <div className="navlist" id="navlist">
          <a className="navoption" href="#">
            Pricing
          </a>
          <a className="navoption" href="#">
            Bank Connect
          </a>
          <a className="navoption" href="#">
            Help
          </a>
          <a className="navoption" href="#contact">
            About Us
          </a>
          <a className="navoption" href="#about">
            Blog
          </a>
          <a className="navoption active" href="#about">
            Signup
          </a>
          <a href="javascript:void(0);" className="icon" id="hamburger">
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </header>
    </>
  );
}
