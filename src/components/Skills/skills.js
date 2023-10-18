import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/website-design.png"
import AppDesign from "../../assets/app-design.png"

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About me</span>
            <span className="skillDescription">
                As an aspiring web developer with a unique background in HR, I bring a dynamic perspective to the world of technology. I have knowledge in JavaScript, HTML5, CSS3, and in the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), I am ready to embark on an exciting coding journey. <br />
                <br />
                Beyond my technical prowess, my soft skills in communication, adaptability, and rapid learning set me apart. I am eager to contribute and grow within an existing, collaborative team while thriving in an informal yet structured environment. I am actively seeking a role that not only allows me to expand my knowledge but also to make meaningful contributions to innovative projects. <br />
                <br />
                I love meeting new people and learning about new cultures! I have 6+ years of international living abroad experience - Brazil, USA and The Netherlands
            </span>
            <div className="skillsBars">
                <div className="skillBar">
                    <img src={UIDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Skill 1</h2>
                        <p>skill 1 description description description description description   </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={WebDesign}alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Skill 2</h2>
                        <p>skill 2 description description description description description </p>
                    </div>
                </div>

                <div className="skillBar">
                    <img src={AppDesign} alt="" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Skill 3</h2>
                        <p>skill 3 description description description description description </p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Skills;