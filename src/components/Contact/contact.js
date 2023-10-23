import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <span className="contactDescription">Please contact me directly at priscila.borges.nl@gmail.com or through this form</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="email" className="email" placeholder="Your Email" />
                <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
}

export default Contact;