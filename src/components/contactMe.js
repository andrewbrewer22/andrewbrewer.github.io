import React, { useState } from "react";
import ContactModal from "../tools/contactModal";

//style
import "../styles/boldStyle.css";

export default function ContactMe() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <form className="contactme">
            {/*
            <span className="br" id="bold-this">Contact Me</span>
            Name
            <div>
                <input className="contact-personal" id="name" placeholder="John Doe"></input>
            </div>
            Email
            <div>
                <input className="contact-personal" id="email" placeholder="youremail@email.com"></input>
            </div>
            Message or Inquiry
            <div>
                <textarea type="text" className="contact-message" id="message" placeholder="Say Hello!"></textarea>
            </div>
            <div>
                <button type="submit" className="contact-submit" id="contact-submit">
                    Submit
                </button>
            </div>
            */}
            <button className={"primaryBtn"} onClick={() => setIsOpen(true)}>
                Contact Me
            </button>
            {isOpen && <ContactModal setIsOpen={setIsOpen} />}
        </form>
    );
}