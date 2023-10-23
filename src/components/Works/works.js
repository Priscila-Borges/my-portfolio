import React from "react";
import "./works.css";
import Project1Image from "../../assets/project1.png";
import Project2Image from "../../assets/project2.png";
import Project3Image from "../../assets/project3.png";

const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Projects</h2>
            <div className="workImgs">
                <div className="workImgContainer">
                    <a href="https://globalvibes.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Project1Image} alt="Portfolio1" className="worksImg" />
                    </a>
                    <h3>Global Vibes</h3>
                    <p className="projectDesc">Web application project developed as the final assignment for a web development bootcamp. The project is a social media platform where users can share pictures related to specific hobbies.</p>
                    <ul className="tags">
                        <li>REACT</li>
                        <li>BOOTSTRAP</li>
                        <li>EXPRESS.JS</li>
                        <li>NODE.JS</li>
                        <li>MONGODB</li>
                    </ul>
                </div>

                <div className="workImgContainer">
                    <a href="https://amsterday.adaptable.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Project2Image} alt="Portfolio2" className="worksImg" />
                    </a>
                    <h3>amsterDay</h3>
                    <p className="projectDesc">The core of the application is to allow users to discover ideas for activities in Amsterdam and create their own activities.</p>
                    <ul className="tags">
                        <li>EXPRESS.JS</li>
                        <li>HANDLEBARS.JS</li>
                        <li>MONGODB</li>
                        <li>BOOTSTRAP</li>
                        <li>JAVASCRIPT</li>
                        <li>NODE.JS</li>
                    </ul>
                </div>

                <div className="workImgContainer">
                    <a href="https://priscila-borges.github.io/oop-my-race-game/" target="_blank" rel="noopener noreferrer">
                        <img src={Project3Image} alt="Portfolio3" className="worksImg" />
                    </a>
                    <h3>Race Game</h3>
                    <p className="projectDesc">A a simple and exciting Browser-based game where you control a character and try to jump over obstacles to achieve the highest score possible.</p>
                    <ul className="tags">
                        <li>JAVASCRIPT</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Works;