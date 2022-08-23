import React from "react";
import { useNavigate } from "react-router-dom";

function HealthNavbar() {
    let navigate = useNavigate();

    return (
        <section className="leftbreak color-red-2">
            <span className="leftbreak-background-setter"></span>

            <section className="contact-info">
                <span className="br" id="bold-this">
                    Health
                </span>
                <span className="br"></span>
                <hr className="divider-line"></hr>
            </section>

            <section className="my-projects">
                <button
                    onClick={() => extendProjectMenu()} className="dropbtnHealth"></button>
                <div id="projectDropdownHealth" className="project-dropdown-content-health">
                    <span className="br">
                        <button
                            onClick={() => {navigate("/r-welcome"); }} id="link-button-health">
                            Resume
                        </button>
                    </span>
                </div>
            </section>

            {/* <ContactMe /> */}
        </section>
    );
}

export default HealthNavbar;

function extendProjectMenu() {
    document.getElementById("projectDropdownHealth").classList.toggle("show");
}
window.onclick = function (event) {
    if (!event.target.matches(".dropbtnHealth")) {
        var dropdowns = document.getElementsByClassName("project-dropdown-content-Health");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};
