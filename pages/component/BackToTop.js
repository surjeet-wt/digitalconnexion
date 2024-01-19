import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    // Scroll event handler
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300); // Show the button when scrolled down 300px
    };
  
    // Scroll to top function
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling animation
      });
    };
  
    // Add scroll event listener
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className={`back-to-top ${isVisible ? "visible" : ""}`}>
        <button onClick={scrollToTop}><FaAngleUp /> </button>
      </div>
    );
  };
  


  export default BackToTop;