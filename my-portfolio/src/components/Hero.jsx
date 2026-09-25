import ProfileImg from "../assets/hero-img.jpeg";
import "../styles/Hero.css";

function Hero() {
    return(
        <section id="home">
          <div className="text-container">  
            <p>HI I'M</p>
            <h1>Vasilis</h1>
            <h2>Junior Front-End Developer</h2>
            <p>I build responsive and user-friendly web applications
                using modern technologies like React, JavaScript and modern CSS
            </p>

            <a href="#projects">Projects →</a>

            <a href="/Front - End Developer CV.pdf" download>Download CV</a>

           </div>

           <div className="image-container">
             <img src={ProfileImg} alt="Vasilis" /> 
           </div> 
        </section>
        
    )
}

export default Hero;