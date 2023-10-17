import React from "react";
import "./intro.css"
import { Link } from "react-scroll"
import bg from "../../assets/image.png"
import btnImg from "../../assets/hireme.png"


const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introtext">I'm <span className="introName">Priscila</span> <br />Web Developer</span>
                <p className="introPara">I am an aspiring web developer with a unique background in HR</p>
                <Link><button className="btn"><img src={btnImg} alt="Hire" className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} alt="profile" className="bg" />
        </section>
    )
}

export default Intro;