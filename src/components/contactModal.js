import React, { FormEvent } from "react"
import "../styles/modal.css";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";

const ContactModal = ({ setContactIsOpen }) => {


    return (
        disableScroll(),
        <main className="contact-body">
            <div className="contact-content">
                <form className="contact-form">

                    <span id="br">
                        <span>
                            First Name
                            <span id="br">
                                
                                <input className="name" id="first-name" placeholder="John"></input>
                            </span >
                        </span>

                        <span>
                            Last Name
                            <span id="br">
                                <input className="name" id="last-name" placeholder="Doe"></input>
                            </span>
                        </span>
                    </span>


                    Email
                    <span id="br">
                        <input className="email" id="email" placeholder="youremail@email.com"></input>
                    </span>
                    Message or Inquiry
                    <span id="br">
                        <textarea type="text" className="contact-message" id="message" placeholder="Say Hello!"></textarea>
                    </span>

                    <button className="contact-submit" onClick={() => { setContactIsOpen(false); enableScroll(); }}>
                        Submit
                    </button>
                </form>
                <button className="contact-exit" onClick={() => { setContactIsOpen(false); enableScroll(); }}>
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

