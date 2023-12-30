import { Link } from "react-router-dom";
import "./Footer.css"; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li><Link to="/privacy-policy">Privacy Policy</Link></li>
        <li><Link to="/general-policy">General Policy</Link></li>
        <li><Link to="/disclaimer">Disclaimer</Link></li>
        <li><Link to="/return-refund-policy">Return & Refund Policy</Link></li>
      </ul>
    </footer>
  );
}

export default Footer;
