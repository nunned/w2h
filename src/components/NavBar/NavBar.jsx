// components/Navbar.js
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/way2heady.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobile) {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" />
      </Link>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <Link to="/home" className="home" onClick={() => setIsMobile(false)}>
          <li>Home</li>
        </Link>
        <Link to="/seeds" className="shop" onClick={() => setIsMobile(false)}>
          <li>Shop</li>
        </Link>
        <Link
          to="/contact"
          className="contact"
          onClick={() => setIsMobile(false)}
        >
          <li>Contact</li>
        </Link>
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
