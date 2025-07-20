// Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <img src="/images/vmss-logo.png" alt="VMSS Logo" className="footer-logo" />
          <p>
            VMSS Thermal Engineering Consultants Pvt. Ltd.  
            Delivering energy-saving & automation solutions globally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/productsandservices">Products & Services</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/stories">Our Experience</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: sathayev@hotmail.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Pune, Maharashtra, India</p>
          <div className="footer-social">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} VMSS Thermal Engineering Consultants. All rights reserved.
      </div>
    </footer>
  );
}
