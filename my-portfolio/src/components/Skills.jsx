import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaGitAlt
} from "react-icons/fa";
import "../styles/Skills.css"

function Skills() {
    const skills = [
        {name: "HTML", icon: FaHtml5},
        {name: "CSS", icon: FaCss3Alt},
        {name: "JavaScript", icon: FaJs},
        {name: "React", icon: FaReact},
        { name: "GitHub", icon: FaGithub },
        {name: "Git", icon: FaGitAlt}
    ]

    return(
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills">
                <ul>
                    {skills.map((skill) => {
                        const Icon = skill.icon
                        return <li key={skill.name}><Icon /> <span>{skill.name}</span></li>
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Skills;