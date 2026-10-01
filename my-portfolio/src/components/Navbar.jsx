import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="logo">V</a>

      <ul className={`nav-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
        
        <li>
          <a
            href="/Vasilis-Efthymiou-Junior-Front-End-Developer-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            CV
          </a>
        </li>


        <li>
          <a
            href="/Vasilis-Efthymiou-Junior-Front-End-Developer-CV.pdf"
            className="download-cv"
            onClick={closeMenu}
            download
          >
            Download CV
          </a>
        </li>
      </ul>

      <button
        className={`menu-toggle ${isOpen ? "active" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      ></button>
    </nav>
  );
}

export default Navbar;