import miramarImage from "../assets/miramar-project.webp";
import financeImage from "../assets/personal-financial-goal-tracker-project.webp";

import "../styles/Projects.css";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects">

        <div className="project">
          <h3>Miramar Seacoast</h3>

          <a
            href="https://agent-6ab9448e2c4a38351376e2ed--miramarseacoast.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={miramarImage}
              alt="Miramar Seacoast website"
              loading="lazy"
            />
          </a>
        </div>

        <div className="project">
          <h3>Personal Finance Tracker</h3>

          <a
            href="https://personal-financial-goal-tracker-app.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={financeImage}
              alt="Personal Finance Tracker website"
              loading="lazy"
            />
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;