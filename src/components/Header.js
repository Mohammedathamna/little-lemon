import React from "react";
import logo from "../assets/Logo.svg"; // Adjust the path as necessary
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <a href="" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <Nav />

    </header>
  );
}

export default Header;

