import "../styles/Hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="text-container">
        <p>HI I'M</p>

        <h1>Vasilis</h1>

        <h2>Junior Front-End Developer</h2>

        <p>
          I build responsive and user-friendly websites using modern
          technologies like HTML, CSS, JavaScript, and React.
        </p>

        <a href="#projects">Projects →</a>

        <a
          href="/Vasilis-Efthymiou-Junior-Front-End-Developer-CV.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Hero;