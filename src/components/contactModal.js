import React, { FormEvent, useState } from "react"
import "../styles/modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

const ContactModal = ({ setContactIsOpen }) => {

    //#region handle contact form submissions
    // const [status, setStatus] = useState("Submit");
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus("Sending...");
    //     const { name, email, message } = e.target.elements;
    //     let details = {
    //         name: name.value,
    //         email: email.value,
    //         message: message.value,
    //     };
    //     let response = await fetch("http://localhost:5000/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json;charset=utf-8",
    //         },
    //         body: JSON.stringify(details),
    //     });
    //     setStatus("Submit");
    //     let result = await response.json();
    //     alert(result.status);
    // };
    //#endregion

    return (
        disableScroll(),
        <main className="contact-body">
            <div className="contact-content">

                <form className="contact-form" >
                    Name
                    <div id="br">
                        <input type="text" className="name" id="name" placeholder="John Doe" required />
                    </div>

                    Email
                    <div id="br">
                        <input type="email" className="email" id="email" placeholder="youremail@email.com" required />
                    </div>

                    Message or Inquiry
                    <div id="br">
                        <textarea className="contact-message" placeholder="Say Hello!" id="message" required />
                    </div>

                    {/*onClick={() => {setContactIsOpen(false); enableScroll(); }}
                    To get this to close when submitted we need to first see if the submission
                    was successful and than execute the closing commands                     {status}*/}
                    <button type="submit" className="contact-submit" >
                        </button>
                </form>

                <button type="button" className="contact-exit" onClick={() => { setContactIsOpen(false); enableScroll(); }}>
                    <RiCloseLine style={{ marginBottom: "-3px" }} />
                </button>
            </div>

        </main>
    );
}
export default ContactModal;

//#region no scrolling courtesy of https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily

var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
    e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

//#endregion

