import React from "react";
import { useNavigate } from "react-router-dom";
//useParams,   Link
//import ContactMe from "./contactMe";
//style
//import "../styles/mainStyle.css";

function ErrorLeftNavbar() {
    let navigate = useNavigate();

    return (
        <section className="leftbreak portfolio-color-1">
            <span className="leftbreak-background-setter"></span>
            <br></br>
            <span className="br">
                <button
                    onClick={() => { navigate("/p-welcome"); }}
                    id="link-button">Personal</button>
            </span>
            <br></br>
            <span className="br">
                <button
                    onClick={() => { navigate("/r-welcome"); }}
                    id="link-button">Resume</button>
            </span>
        </section>
    );
}

export default ErrorLeftNavbar;