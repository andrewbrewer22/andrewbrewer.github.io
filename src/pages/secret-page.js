import React from "react";

import LeftNavbar from "../components/leftnavbar";
import SecretComponent from "../components/secretComponent";

import "../styles/mainStyle.css";

export default class SecretPage extends React.Component{
    render(){
        return(
            <body className="body">
                <section className="break-container">
                    <LeftNavbar />

                    <SecretComponent />
                </section>
            </body>
        );
    }
}