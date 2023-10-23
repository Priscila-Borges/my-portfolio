import React from "react";
import "./intro.css"
import bg from "../../assets/image.png"
import LinkedInIcon from "../../assets/linkedInIcon.png"
import GitHubIcon from "../../assets/github-icon.png"
import DownloanIcon from "../../assets/downloadIcon.webp"



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm <span className="introName">Priscila</span> <br />Web Developer</span>
                <p className="introPara">I am an aspiring web developer with a unique background in HR</p>
                <div>
                    <a
                        href={require("../../assets/priscila-borges-cv.pdf")}
                        download="priscila-borges-cv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="btn">
                            Download my CV <img src={DownloanIcon} alt="Download" className="btnImg" />
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/priscilaborges1989/" target="_blank" rel="noopener noreferrer">
                        <button className="btn"><img src={LinkedInIcon} alt="LinkedIn" className="btnImg" /></button>
                    </a>
                    <a href="https://github.com/Priscila-Borges" target="_blank" rel="noopener noreferrer">
                        <button className="btn"><img src={GitHubIcon} alt="GitHub" className="btnImg" /></button>
                    </a>
                </div>
            </div>

            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;