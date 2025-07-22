import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left side: logo + text */}
        <div className="logo-text-wrap">
          <img src="/images/vmss-logo.png" alt="VMSS Logo" className="logo-img" />
          <Link to="/" className="brand-text">
            VMSS Thermal Engineering Consultants Pvt. Ltd.
          </Link>
        </div>

        {/* ✅ Hamburger always visible on right */}
        <button 
          className="hamburger" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>

        {/* ✅ Navigation Links (desktop + mobile) */}
        <ul className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/productsandservices" onClick={() => setMobileMenuOpen(false)}>Products & Services</Link></li>

          {/* Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => !mobileMenuOpen && setShowDropdown(true)}
            onMouseLeave={() => !mobileMenuOpen && setShowDropdown(false)}
          >
            <span 
              className="dropdown-toggle" 
              onClick={() => mobileMenuOpen && setShowDropdown(!showDropdown)}
            >
              About Us
            </span>
            {(showDropdown || (!mobileMenuOpen && showDropdown)) && (
              <ul className="dropdown-menu">
                <li><Link to="/company" onClick={() => setMobileMenuOpen(false)}>Company</Link></li>
                <li><Link to="/mission" onClick={() => setMobileMenuOpen(false)}>Mission & Vision</Link></li>
              </ul>
            )}
          </li>

          <li><Link to="/customers" onClick={() => setMobileMenuOpen(false)}>Customers</Link></li>
          <li><Link to="/stories" onClick={() => setMobileMenuOpen(false)}>Our Experience</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
