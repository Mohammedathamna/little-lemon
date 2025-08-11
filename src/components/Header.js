import React from "react";
import logo from "../assets/Logo.svg"; // Adjust the path as necessary
import Nav from "./Nav";
import { useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
 


  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="Logo" />
      </a>
      <div className="header-content">
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
        <Nav className={`nav ${isOpen ? "show" : ""}`} />
      </div>
    </header>
  );
}

export default Header;

