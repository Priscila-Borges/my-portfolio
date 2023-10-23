import React from "react";
import "./skills.css";

const Skills = () => {
    return (
        <section id="skillsBars">
            <div>
                <h2 className="skillTitle">Technical Skills</h2>
                <ul className="skillBar">
                    <li className="skillBarItem">JavaScript</li>
                    <li className="skillBarItem">HTML5</li>
                    <li className="skillBarItem">CSS3</li>
                    <li className="skillBarItem">MongoDB</li>
                    <li className="skillBarItem">ExpressJS</li>
                    <li className="skillBarItem">ReactJS</li>
                    <li className="skillBarItem">NodeJS</li>
                    <li className="skillBarItem">Git</li>
                    <li className="skillBarItem">GitHub</li>
                </ul>

                <h2 className="skillTitle">Soft Skills</h2>
                <ul className="skillBar">
                    <li className="skillBarItem">Adaptability</li>
                    <li className="skillBarItem">Communication</li>
                    <li className="skillBarItem">Flexibility</li>
                    <li className="skillBarItem">Empathy</li>
                    <li className="skillBarItem">Relationship building</li>
                    <li className="skillBarItem">Good listening</li>
                    <li className="skillBarItem">Reliability</li>
                    <li className="skillBarItem">Negotiating skills</li>
                </ul>
            </div>            
        </section>
    );
}

export default Skills;