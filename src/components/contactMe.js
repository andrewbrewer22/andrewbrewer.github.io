import React, { useState } from "react";
// import ContactModal from "../tools/contactModal";
import ContactModal from "./contactModal";

//style
import "../styles/mainStyle.css";
import "../styles/modal.css";

export default function ContactMe() {
    const [contactIsOpen, setContactIsOpen] = useState(false);
    return (
        <main className="primaryBtn-container">
            <button className="primaryBtn" onClick={() => setContactIsOpen(true)}>
                Contact Me
            </button>
            {contactIsOpen && <ContactModal setContactIsOpen={setContactIsOpen} />}
        </main>
    );
}