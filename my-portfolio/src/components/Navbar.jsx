import "../styles/Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="logo">V</div>

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="/Front - End Developer CV.pdf"
         target="_blank"
         rel="noopener noreferrer">
          CV</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a href="/Front - End Developer CV.pdf" download>Download CV</a>
    </nav>
  );
}

export default Navbar;