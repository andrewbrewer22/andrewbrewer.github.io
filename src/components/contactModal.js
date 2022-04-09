import React from "react"
import "../styles/modal.css";

const ContactModal = ({ setContactIsOpen }) => {
    return (
        <main className="contact-body">
            <div className="contact-content">
                <form className="contact-form">
                    Name
                    <span id="br">
                        <input className="contact-personal" id="name" placeholder="John Doe"></input>
                    </span>
                    Email
                    <span id="br">
                        <input className="contact-personal" id="email" placeholder="youremail@email.com"></input>
                    </span>
                    Message or Inquiry
                    <span id="br">
                        <textarea type="text" className="contact-message" id="message" placeholder="Say Hello!"></textarea>
                    </span>

                    <button className="contact-submit" onClick={() => setContactIsOpen(false)}>
                        Submit
                    </button>
                </form>
            </div>
        </main>
    );
}
export default ContactModal;