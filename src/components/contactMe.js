import React, { useState } from "react";
// import ContactModal from "../tools/contactModal";
import ContactModal from "./contactModal";

//style
import "../styles/boldStyle.css";
import "../styles/modal.css";

export default function ContactMe() {
    const [contactIsOpen, setContactIsOpen] = useState(false);
    return (
        <main>
            <button className={"primaryBtn"} onClick={() => setContactIsOpen(true)}>
                Contact Me
            </button>
            {contactIsOpen && <ContactModal setContactIsOpen={setContactIsOpen} />}
        </main>
            
            
        /*
        <form className="contactme">
            
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
        </form>
        */
    );
}