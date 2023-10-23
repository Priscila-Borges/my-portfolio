import React from "react";
import "./intro.css"
import { Link } from "react-scroll"
import bg from "../../assets/image.png"
import LinkedInIcon from "../../assets/linkedInIcon.png"
import GitHubIcon from "../../assets/github-icon.png"
import DownloanIcon from "../../assets/downloadIcon.jpg"



const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm <span className="introName">Priscila</span> <br />Web Developer</span>
                <p className="introPara">I am an aspiring web developer with a unique background in HR</p>
                <div>
                    <Link><button className="btn">Download my cv <img src={DownloanIcon} alt="Download" className="btnImg" /></button></Link>
                    <Link><button className="btn"><img src={LinkedInIcon} alt="LinkedIn" className="btnImg" /></button></Link>
                    <Link><button className="btn"><img src={GitHubIcon} alt="GitHub" className="btnImg" /></button></Link>
                </div>
            </div>

            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;