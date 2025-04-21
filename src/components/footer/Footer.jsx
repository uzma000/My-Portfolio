import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        UZMA
      </a>

      {/* Page links */}
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Social Profiles */}
      <div className="footer__socials">
        <a
          href=" "
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href=" "
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href=" "
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Uzma's Personal Website. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
