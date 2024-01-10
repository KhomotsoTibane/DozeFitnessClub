import React from "react";
import "./Footer.css";
import { FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer">
      <hr />
      <div className="container">
        <div className="social-links">
          <a
            href="https://www.instagram.com/basic_pulse?igsh=MTh3bXdhdG1ic2JvZA=="
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://facebook.com/Basicpulsefitness" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@basicpulse_fitnes?_t=8iusq5WcmTF&_r=1"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; Basic Pulse Fitness | Khomotso </p>
        </div>
      </div>
      <div className="blur blur-footer-1"></div>
      <div className="blur blur-footer-1"></div>
    </footer>
  );
};

export default Footer;
