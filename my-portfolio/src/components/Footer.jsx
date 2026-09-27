import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">

        <div className="footer-logo">V</div>

        <div className="social-links">
          <a
            href="https://github.com/VTheGreek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/vasilis-efthymiou-dev/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:vasilis.developer@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p>
          © {new Date().getFullYear()} Vasilis. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;