import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png"
import Portfolio2 from "../../assets/portfolio-2.png"
import Portfolio3 from "../../assets/portfolio-3.png"


const Works = () => {
    return (
        <section id="works">
            <h2 className="worksTitle">My Portifolio</h2>
            <span className="worksDescription">Nice description of all my projects</span>
            <div className="workImgs">
                <img src={Portfolio1} alt="Portfolio1" className="worksImg"/>
                <img src={Portfolio2} alt="Portfolio2" className="worksImg"/>
                <img src={Portfolio3} alt="Portfolio3" className="worksImg"/>
            </div>
            <button className="worksBtn">See More</button>
        </section>
    );
}

export default Works;