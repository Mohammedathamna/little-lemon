import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1: About */}
        <div className="footer-column">
          <h3>Little Lemon</h3>
          <p>
            A charming bistro serving simple, delicious food made from fresh,
            local ingredients.
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Little Lemon St, Food City, FL 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        {/* Column 4: Social */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#facebook">
              <FaFacebookF />
            </a>
            <a href="#twitter">
              <FaTwitter />
            </a>
            <a href="#instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Little Lemon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
