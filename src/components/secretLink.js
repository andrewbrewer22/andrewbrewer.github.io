import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/mainStyle.css";


function SecretLink(){
    let navigate = useNavigate();

    return(
        <section>
            <button
            onClick={() => {
                navigate("/secret");
            }}
            className="secret-link"
            >Secret Link</button>
        </section>
    );
}

export default SecretLink;