import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./contact.css";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_i408hnl', 'template_r5pt16a', form.current, 'XaOHc9y9Vly77r240')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert("Email Sent!")
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id="contact">
            <h2 className="contactPageTitle">Contact Me</h2>
            <span className="contactDescription">Please contact me directly at priscila.borges.nl@gmail.com or through this form</span> <br/>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your Name" name="your_name" />
                <input type="email" className="email" placeholder="Your Email" name="your_email"/>
                <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
            </form>
        </section>
    );
}

export default Contact;