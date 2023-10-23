import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" onClick={() => {
                document.getElementById("intro").scrollIntoView({ beehavior: "smooth" });
            }} />

            <div className="menu">
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="menuItem">Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-65} duration={500} className="menuItem">About Priscila</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-65} duration={500} className="menuItem">Portfolio</Link>
            </div>
            <button className="menuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({ beehavior: "smooth" });
            }}>
                <img src={contactImg} alt="" className="menuImg" />Contact Me</button>

            <img src={menu} alt="menu" className="mobMenu" onClick={() => setShowMenu(!showMenu)} />
            <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="mobItem" onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={-65} duration={500} className="mobItem" onClick={() => setShowMenu(false)}>About Priscila</Link>
                <Link activeClass="active" to="works" spy={true} smooth={true} offset={-65} duration={500} className="mobItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-65} duration={500} className="mobItem" onClick={() => setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar