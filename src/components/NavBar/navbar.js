import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import {Link} from "react-scroll"
import contactImg from "../../assets/contact.png"

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="menu">
                <Link className="menuItem">Home</Link>
                <Link className="menuItem">About</Link>
                <Link className="menuItem">Portfolio</Link>
            </div>
            <button className="menuBtn">
                <img src={contactImg} alt="" className="menuImg" />Contact Me</button>
        </nav>
    )
}

export default Navbar