import React from "react";
import { useNavigate } from "react-router-dom";

function LanguageNavbar() {
    let navigate = useNavigate();

    return (
        <section className="leftbreak language-color-1">
            <span className="leftbreak-background-setter"></span>

            <section className="contact-info">
                <span className="br" id="bold-this">
                    Languages
                </span>
                <span className="br"></span>
                <hr className="divider-line"></hr>
            </section>

            <section className="my-projects">
                <button onClick={() => extendProjectMenu()} className="dropbtn"></button>
                <div id="projectDropdown" className="project-dropdown-content">
                    <span className="br">
                        <button
                            onClick={() => { navigate("/"); }}
                            id="link-button">Home</button>
                    </span>
                    <span className="br">
                        <button
                            onClick={() => { navigate("/language/english"); }}
                            id="link-button">English
                        </button>
                    </span>
                    <span className="br">
                        <button
                            onClick={() => {
                                navigate("/language/spanish");
                            }}
                            id="link-button"
                        >
                            Spanish
                        </button>
                    </span>
                    <span className="br">
                        <button
                            onClick={() => {
                                navigate("/language/japanese");
                            }}
                            id="link-button"
                        >
                            Japanese
                        </button>
                    </span>

                </div>
            </section>

            {/* <ContactMe /> */}
        </section>
    );
}

export default LanguageNavbar;

function extendProjectMenu() {
    document.getElementById("projectDropdown").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("project-dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}