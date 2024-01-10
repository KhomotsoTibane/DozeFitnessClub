import React, { useState, useEffect } from "react";
import "./Header.css";
import Logo from "../../assets/bp-logo.png";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, []);

  return (
    <header>
      {/* <img src={Logo} alt="logo" className="logo" /> */}
      <div className="logo">
        <h1 className="logo-top">BasicPulse</h1>
        <h1 className="logo-bottom">Fitness</h1>
      </div>
      {toggleMenu === false && mobile === true ? (
        <AiOutlineMenu
          onClick={() => setToggleMenu(true)}
          style={{
            width: "2rem",
            height: "2rem",
            background: "var(--appColor)",
            color: "white",
            borderRadius: "3px",
          }}
        />
      ) : (
        <ul className="header-links">
          <li onClick={() => setToggleMenu(false)}>
            <a href="#hero">Home</a>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <a href="#programs">Programs</a>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <a href="#plans">Plans</a>
          </li>
          <li onClick={() => setToggleMenu(false)}>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
