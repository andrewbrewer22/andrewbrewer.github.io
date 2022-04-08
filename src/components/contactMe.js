import React from "react";

//style
import "../styles/boldStyle.css";

export default function ContactMe() {
    return (
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
                <textarea type="text" className="contact-message" id="message" placeholder="Hello! ..."></textarea>
            </div>
            <div>
                <button className="contact-sumbit" id="contact-submit">
                    Submit
                </button>
            </div>
        </form>
    );
}