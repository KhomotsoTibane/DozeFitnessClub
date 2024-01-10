import React, { useState, useEffect } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      id="scrollTopBtn"
      onClick={scrollToTop}
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#008000",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        zIndex: "999",
      }}
    >
      <FaAngleDoubleUp />
    </button>
  );
};

export default ScrollToTopButton;
