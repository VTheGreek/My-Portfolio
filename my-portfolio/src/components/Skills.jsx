import "../styles/Skills.css"

function Skills() {
    const skills = [
        {name: "HTML", level: 5},
        {name: "CSS", level: 4},
        {name: "JavaScript", level: 4},
        {name: "React", level: 3},
        {name: "Git", level: 2},
        {name: "HTTP", level: 2}
    ]

    return(
        <section id="skills">
            <h2>Skills</h2>

            <div className="skills">
                <ul>
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            {skill.name} 
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>{skill.level > i ? "★" : "☆"}</span>
                            ))}
                        </li>    
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Skills;